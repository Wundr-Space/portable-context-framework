/**
 * Storage operations for context sessions
 */
import type { ContextSession } from './types.js';
export declare const ROOT_DIR: string;
export declare const CONTEXT_DATA_DIR: string;
/**
 * Save a session to disk
 */
export declare function saveSession(session: ContextSession): Promise<string>;
/**
 * Load all sessions, optionally filtered by project
 */
export declare function loadAllSessions(project?: string): Promise<ContextSession[]>;
/**
 * Get the file path for a session
 */
export declare function getSessionFilePath(session: ContextSession): string;
/**
 * Parse relative date strings like "7 days" or "2 weeks"
 */
export declare function parseRelativeDate(dateStr: string): Date;
//# sourceMappingURL=storage.d.ts.map