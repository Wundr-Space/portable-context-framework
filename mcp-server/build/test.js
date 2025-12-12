/**
 * Test script for MCP tools
 */
import { addContext } from "./tools/add-context.js";
import { queryContext } from "./tools/query-context.js";
import { getTimeline } from "./tools/get-timeline.js";
async function runTests() {
    console.log("=== Wundr Context MCP Server Tests ===\n");
    try {
        // Test 1: Add a session
        console.log("Test 1: Adding a test session...");
        const addResult = await addContext({
            project: "test-project",
            title: "Test OAuth implementation",
            type: "feature",
            summary: "Implemented OAuth2 authentication flow with refresh tokens. Added secure cookie handling and token rotation for enhanced security.",
            commits: ["abc123", "def456"],
            chat_url: "https://claude.ai/chat/test123",
            tags: ["authentication", "security", "test"]
        });
        console.log(addResult);
        console.log("✓ Session added\n");
        // Wait a moment
        await new Promise(resolve => setTimeout(resolve, 100));
        // Test 2: Add another session
        console.log("Test 2: Adding another session...");
        const addResult2 = await addContext({
            project: "test-project",
            title: "Database migration",
            type: "refactor",
            summary: "Migrated user authentication tables to support OAuth tokens. Added indexes for better query performance.",
            tags: ["database", "performance", "test"]
        });
        console.log(addResult2);
        console.log("✓ Second session added\n");
        // Wait a moment
        await new Promise(resolve => setTimeout(resolve, 100));
        // Test 3: Query all sessions
        console.log("Test 3: Querying all test sessions...");
        const queryAll = await queryContext({
            project: "test-project"
        });
        console.log(queryAll);
        console.log("✓ Query completed\n");
        // Test 4: Query by keyword
        console.log("Test 4: Querying by keyword 'authentication'...");
        const queryAuth = await queryContext({
            project: "test-project",
            query: "authentication"
        });
        console.log(queryAuth);
        console.log("✓ Keyword query completed\n");
        // Test 5: Query by tags
        console.log("Test 5: Querying by tags ['security', 'test']...");
        const queryTags = await queryContext({
            project: "test-project",
            tags: ["security", "test"]
        });
        console.log(queryTags);
        console.log("✓ Tag query completed\n");
        // Test 6: Get timeline
        console.log("Test 6: Getting timeline...");
        const timeline = await getTimeline({
            project: "test-project"
        });
        console.log(timeline);
        console.log("✓ Timeline retrieved\n");
        console.log("=== All Tests Passed! ===");
    }
    catch (error) {
        console.error("Test failed:", error);
        process.exit(1);
    }
}
runTests();
//# sourceMappingURL=test.js.map