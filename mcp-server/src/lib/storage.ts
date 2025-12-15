/**
 * Storage operations for context sessions
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import type { ContextSession } from './types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the root directory (two levels up from build/lib)
export const ROOT_DIR = path.resolve(__dirname, '../../..');
export const CONTEXT_DATA_DIR = path.join(ROOT_DIR, 'context-data');

/**
 * Save a session to disk
 */
export async function saveSession(session: ContextSession): Promise<string> {
  const dir = path.join(CONTEXT_DATA_DIR, 'projects', session.project, 'sessions');

  // Create directory if it doesn't exist
  await fs.mkdir(dir, { recursive: true });

  const filename = `${session.timestamp}-${session.id}.json`;
  const filepath = path.join(dir, filename);

  await fs.writeFile(filepath, JSON.stringify(session, null, 2));

  return filepath;
}

/**
 * Load all sessions, optionally filtered by project
 */
export async function loadAllSessions(project?: string): Promise<ContextSession[]> {
  const sessions: ContextSession[] = [];

  try {
    const projectsDir = path.join(CONTEXT_DATA_DIR, 'projects');

    // Check if projects directory exists
    try {
      await fs.access(projectsDir);
    } catch {
      return sessions; // No sessions yet
    }

    // Get all project directories
    const projectDirs = project
      ? [project]
      : await fs.readdir(projectsDir);

    for (const proj of projectDirs) {
      const sessionsDir = path.join(projectsDir, proj, 'sessions');

      try {
        await fs.access(sessionsDir);
      } catch {
        continue; // Project has no sessions directory
      }

      const files = await fs.readdir(sessionsDir);

      for (const file of files) {
        if (!file.endsWith('.json')) continue;

        try {
          const filepath = path.join(sessionsDir, file);
          const content = await fs.readFile(filepath, 'utf-8');
          const session = JSON.parse(content) as ContextSession;
          sessions.push(session);
        } catch (error) {
          console.error(`Error loading session ${file}:`, error);
          // Skip malformed files
        }
      }
    }
  } catch (error) {
    console.error('Error loading sessions:', error);
  }

  return sessions;
}

/**
 * Get the file path for a session
 */
export function getSessionFilePath(session: ContextSession): string {
  return path.join(
    'context-data',
    'projects',
    session.project,
    'sessions',
    `${session.timestamp}-${session.id}.json`
  );
}

/**
 * Parse relative date strings like "7 days" or "2 weeks"
 */
export function parseRelativeDate(dateStr: string): Date {
  const now = new Date();

  // Try to parse as ISO date first
  const isoDate = new Date(dateStr);
  if (!isNaN(isoDate.getTime())) {
    return isoDate;
  }

  // Parse relative dates
  const match = dateStr.match(/^(\d+)\s+(day|days|week|weeks|month|months)$/i);
  if (match) {
    const amount = parseInt(match[1]);
    const unit = match[2].toLowerCase();

    if (unit.startsWith('day')) {
      now.setDate(now.getDate() - amount);
    } else if (unit.startsWith('week')) {
      now.setDate(now.getDate() - (amount * 7));
    } else if (unit.startsWith('month')) {
      now.setMonth(now.getMonth() - amount);
    }
  }

  return now;
}
