/**
 * Type definitions for Wundr Context MCP Server
 */
export type SessionType = "feature" | "bugfix" | "refactor" | "docs" | "exploration";
export type SessionStatus = "in-progress" | "completed" | "paused";
export interface ContextSession {
    id: string;
    timestamp: string;
    project: string;
    session: {
        title: string;
        type: SessionType;
        status: SessionStatus;
    };
    artifacts: {
        commits?: string[];
        pr?: string;
        chats?: string[];
        diagrams?: string[];
        docs?: string[];
    };
    summary: string;
    tags: string[];
    relatedSessions?: string[];
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
//# sourceMappingURL=types.d.ts.map