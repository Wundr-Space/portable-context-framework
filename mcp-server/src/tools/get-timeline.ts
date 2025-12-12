/**
 * Tool: get_timeline
 * Show chronological session history
 */

import type {
  GetTimelineInput,
  GetTimelineResult,
  TimelineDay,
  TimelineEntry
} from '../lib/types.js';
import { loadAllSessions, parseRelativeDate } from '../lib/storage.js';

export async function getTimeline(input: GetTimelineInput): Promise<string> {
  const limit = input.limit || 20;

  // Load all sessions for the project
  const allSessions = await loadAllSessions(input.project);

  // Filter by date if specified
  let filtered = allSessions;
  if (input.since) {
    const sinceDate = parseRelativeDate(input.since);
    filtered = filtered.filter((session) => {
      const sessionDate = new Date(session.timestamp);
      return sessionDate >= sinceDate;
    });
  }

  // Sort by timestamp (newest first)
  const sorted = filtered.sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  // Limit results
  const limited = sorted.slice(0, limit);

  // Group by date
  const grouped = new Map<string, TimelineEntry[]>();

  for (const session of limited) {
    const date = new Date(session.timestamp);
    const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD
    const time = date.toTimeString().split(' ')[0].substring(0, 5); // HH:MM

    if (!grouped.has(dateStr)) {
      grouped.set(dateStr, []);
    }

    grouped.get(dateStr)!.push({
      time,
      title: session.session.title,
      type: session.session.type,
      status: session.session.status,
      id: session.id
    });
  }

  // Build timeline
  const timeline: TimelineDay[] = Array.from(grouped.entries()).map(([date, sessions]) => ({
    date,
    sessions
  }));

  const result: GetTimelineResult = {
    project: input.project,
    total_sessions: filtered.length,
    showing: limited.length,
    timeline
  };

  return JSON.stringify(result, null, 2);
}
