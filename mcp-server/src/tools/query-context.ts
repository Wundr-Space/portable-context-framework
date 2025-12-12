/**
 * Tool: query_context
 * Search sessions by text, tags, or project
 */

import type {
  QueryContextInput,
  QueryContextResult,
  SessionSearchResult,
  ContextSession
} from '../lib/types.js';
import { loadAllSessions, getSessionFilePath } from '../lib/storage.js';

export async function queryContext(input: QueryContextInput): Promise<string> {
  const limit = input.limit || 10;

  // Load all sessions (filtered by project if specified)
  const allSessions = await loadAllSessions(input.project);

  // Filter sessions
  let filtered = allSessions;

  // Apply text query
  if (input.query) {
    const queryLower = input.query.toLowerCase();
    filtered = filtered.filter((session) => {
      const titleMatch = session.session.title.toLowerCase().includes(queryLower);
      const summaryMatch = session.summary.toLowerCase().includes(queryLower);
      const tagsMatch = session.tags.some(tag => tag.toLowerCase().includes(queryLower));

      return titleMatch || summaryMatch || tagsMatch;
    });
  }

  // Apply tags filter (AND logic - session must have ALL specified tags)
  if (input.tags && input.tags.length > 0) {
    filtered = filtered.filter((session) => {
      return input.tags!.every(tag =>
        session.tags.some(t => t.toLowerCase() === tag.toLowerCase())
      );
    });
  }

  // Sort by relevance and timestamp
  const sorted = filtered.sort((a, b) => {
    // If there's a query, prioritize exact title matches
    if (input.query) {
      const queryLower = input.query.toLowerCase();
      const aExactTitle = a.session.title.toLowerCase() === queryLower;
      const bExactTitle = b.session.title.toLowerCase() === queryLower;

      if (aExactTitle && !bExactTitle) return -1;
      if (!aExactTitle && bExactTitle) return 1;
    }

    // Sort by timestamp (newest first)
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  // Limit results
  const results: SessionSearchResult[] = sorted.slice(0, limit).map((session) => ({
    id: session.id,
    timestamp: session.timestamp,
    project: session.project,
    title: session.session.title,
    summary: session.summary,
    tags: session.tags,
    file_path: getSessionFilePath(session)
  }));

  const result: QueryContextResult = {
    found: filtered.length,
    results
  };

  return JSON.stringify(result, null, 2);
}
