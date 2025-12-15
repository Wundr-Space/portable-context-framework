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
export interface BacklogTask {
    title: string;
    description: string;
    doneDefinition: string[];
    relatedCommits: string[];
}
export interface BacklogUserStory {
    title: string;
    description: string;
    acceptanceCriteria: string[];
    tasks: BacklogTask[];
    wikiSection: string;
}
export interface BacklogFeature {
    title: string;
    description: string;
    tags: string[];
    sessionId: string;
    commits: string[];
    userStories: BacklogUserStory[];
}
export interface BacklogPlan {
    project: string;
    azureOrganization?: string;
    azureProject?: string;
    repositoryUrl?: string;
    generatedAt: string;
    features: BacklogFeature[];
    wikiPath: string;
    backlogPath: string;
}
export interface BacklogGenerationInput {
    project: string;
    azure_organization?: string;
    azure_project?: string;
    repository_url?: string;
    since?: string;
    limit?: number;
}
//# sourceMappingURL=types.d.ts.map