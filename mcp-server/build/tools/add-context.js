/**
 * Tool: add_context
 * Captures a development session
 */
import { randomUUID } from 'crypto';
import { saveSession, getSessionFilePath } from '../lib/storage.js';
export async function addContext(input) {
    // Generate ID and timestamp
    const id = randomUUID();
    const timestamp = new Date().toISOString();
    // Build session object
    const session = {
        id,
        timestamp,
        project: input.project,
        session: {
            title: input.title,
            type: input.type,
            status: input.status || 'completed'
        },
        artifacts: {},
        summary: input.summary,
        tags: input.tags || []
    };
    // Add optional artifacts
    if (input.commits && input.commits.length > 0) {
        session.artifacts.commits = input.commits;
    }
    if (input.chat_url) {
        session.artifacts.chats = [input.chat_url];
    }
    if (input.pr_url) {
        session.artifacts.pr = input.pr_url;
    }
    // Save to disk
    const filepath = await saveSession(session);
    // Return success message
    return JSON.stringify({
        success: true,
        message: "Context session saved successfully",
        session_id: id,
        file_path: getSessionFilePath(session),
        timestamp: timestamp
    }, null, 2);
}
//# sourceMappingURL=add-context.js.map