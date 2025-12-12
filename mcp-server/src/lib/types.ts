/**
 * Type definitions for Wundr Context MCP Server
 */

export type SessionType = "feature" | "bugfix" | "refactor" | "docs" | "exploration";
export type SessionStatus = "in-progress" | "completed" | "paused";

export interface ContextSession {
  id: string;                      // UUID v4
  timestamp: string;               // ISO 8601 datetime
  project: string;                 // Project name (e.g., "orphai")

  session: {
    title: string;                 // "Implementing OAuth refresh tokens"
    type: SessionType;
    status: SessionStatus;
  };

  artifacts: {
    commits?: string[];            // Git commit hashes
    pr?: string;                   // GitHub PR URL
    chats?: string[];              // Array of Claude.ai chat URLs
    diagrams?: string[];           // Relative paths to files
    docs?: string[];               // Relative paths to markdown
  };

  summary: string;                 // Human-readable description
  tags: string[];                  // Searchable keywords
  relatedSessions?: string[];      // UUIDs of related sessions
}

export interface AddContextInput {
  project: string;
  title: string;
  type: SessionType;
  summary: string;
  commits?: string[];
  chat_url?: string;
  pr_url?: string;
  tags?: string[];
  status?: SessionStatus;
}

export interface QueryContextInput {
  project?: string;
  query?: string;
  tags?: string[];
  limit?: number;
}

export interface GetTimelineInput {
  project: string;
  since?: string;
  limit?: number;
}

export interface SessionSearchResult {
  id: string;
  timestamp: string;
  project: string;
  title: string;
  summary: string;
  tags: string[];
  file_path: string;
}

export interface QueryContextResult {
  found: number;
  results: SessionSearchResult[];
}

export interface TimelineEntry {
  time: string;
  title: string;
  type: SessionType;
  status: SessionStatus;
  id: string;
}

export interface TimelineDay {
  date: string;
  sessions: TimelineEntry[];
}

export interface GetTimelineResult {
  project: string;
  total_sessions: number;
  showing: number;
  timeline: TimelineDay[];
}
