# Build Phase 1: Wundr Context MCP Server

## Summary

This PR introduces a working Model Context Protocol (MCP) server that enables Claude to capture and query development context across projects. This solves the problem of lost context when switching between chat sessions or returning to projects after time away.

## Problem Statement

When working on projects with Claude, valuable context is scattered across:
- Chat conversations (lost when starting new chats)
- Git commits (capture "what" changed, not "why")
- Developer memory (fallible and non-searchable)

This makes it difficult to:
- Remember architectural decisions made in previous sessions
- Understand the rationale behind past implementations
- Query past work when building related features
- Maintain context continuity across long-term projects

## Solution: Wundr Context MCP Server

A lightweight MCP server that lets Claude capture development sessions with their full context and query them later using natural language.

### What It Does

**Capture sessions with:**
- Session titles and detailed summaries
- Git commit hashes
- Claude.ai chat URLs
- GitHub PR links
- Searchable tags
- Project organization
- Timestamps

**Query context by:**
- Project name
- Keywords (searches title, summary, tags)
- Tags with AND logic
- Chronological timeline view

### Key Features

1. **Three MCP Tools**
   - `add_context` - Captures development sessions
   - `query_context` - Searches sessions by keywords/tags
   - `get_timeline` - Shows chronological project history

2. **Simple Storage**
   - File-based JSON (no database required)
   - Git-tracked for version history
   - Human-readable format
   - Organized by project

3. **Automatic Installation**
   - Cross-platform installer script
   - Auto-detects Claude Desktop config
   - Validates prerequisites
   - Backs up existing configuration

4. **Type-Safe Implementation**
   - Full TypeScript implementation
   - Comprehensive type definitions
   - Input validation
   - Error handling

## Technical Implementation

### Architecture

```
portable-context-framework/
├── mcp-server/
│   ├── src/
│   │   ├── index.ts              # MCP server entry point
│   │   ├── tools/                # Tool implementations
│   │   │   ├── add-context.ts
│   │   │   ├── query-context.ts
│   │   │   └── get-timeline.ts
│   │   ├── lib/
│   │   │   ├── storage.ts        # File I/O operations
│   │   │   └── types.ts          # TypeScript interfaces
│   │   └── schemas/
│   │       └── tool-schemas.ts   # MCP tool definitions
│   ├── build/                    # Compiled JavaScript
│   ├── install.sh                # Automatic installer
│   └── README.md                 # Documentation
└── context-data/
    └── projects/                 # Session storage
        └── {project}/
            └── sessions/
                └── {timestamp}-{uuid}.json
```

### Data Model

Sessions are stored as JSON files with the following structure:

```json
{
  "id": "uuid-v4",
  "timestamp": "ISO-8601-datetime",
  "project": "project-name",
  "session": {
    "title": "Brief description",
    "type": "feature|bugfix|refactor|docs|exploration",
    "status": "in-progress|completed|paused"
  },
  "artifacts": {
    "commits": ["hash1", "hash2"],
    "pr": "github-pr-url",
    "chats": ["claude-chat-url"],
    "diagrams": ["relative/path/to/diagram"],
    "docs": ["relative/path/to/doc"]
  },
  "summary": "Detailed description of work and decisions",
  "tags": ["searchable", "keywords"],
  "relatedSessions": ["related-session-uuid"]
}
```

### Storage Strategy

**File-based approach chosen for Phase 1:**
- ✅ Simple implementation (no database setup)
- ✅ Git-trackable (version history for free)
- ✅ Human-readable (easy debugging)
- ✅ Portable (works anywhere)
- ✅ Fast for small-to-medium projects

Future phases may add database support for large-scale use.

## Installation

### Automatic (Recommended)

```bash
cd mcp-server
./install.sh
```

Then restart Claude Desktop.

### Manual

1. Build the server:
   ```bash
   cd mcp-server
   npm install
   npm run build
   ```

2. Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:
   ```json
   {
     "mcpServers": {
       "wundr-context": {
         "command": "node",
         "args": ["/absolute/path/to/mcp-server/build/index.js"]
       }
     }
   }
   ```

3. Restart Claude Desktop

## Usage Examples

### Capturing a Session

```
User: "I just implemented OAuth refresh tokens. We added a 7-day expiry
       and stored tokens in httpOnly cookies. Commits are abc123 and def456.
       Save this session and tag it with 'auth', 'security'."

Claude: [uses add_context tool]
✓ Session saved successfully
```

### Querying Context

```
User: "What did we decide about authentication?"

Claude: [uses query_context with "authentication"]
Found 3 sessions about authentication. The most recent was OAuth
refresh token implementation where you decided to use httpOnly
cookies for security...
```

### Viewing Timeline

```
User: "Show me what we've been working on for this project."

Claude: [uses get_timeline]
Timeline (12 sessions):
- 2025-12-12
  - 14:30 OAuth refresh tokens (feature)
  - 10:15 Database migration (refactor)
- 2025-12-11
  - 16:00 API error handling (bugfix)
```

## Testing

All functionality verified with comprehensive test suite:

```bash
npm run test
```

**Test coverage:**
- ✅ Session creation and storage
- ✅ Query by project
- ✅ Query by keywords
- ✅ Query by tags (AND logic)
- ✅ Timeline generation
- ✅ Date filtering

## Files Changed

**New Files:**
- `mcp-server/src/` - 11 TypeScript source files (~850 lines)
- `mcp-server/build/` - Compiled JavaScript
- `mcp-server/install.sh` - Automatic installer script
- `mcp-server/README.md` - Comprehensive documentation
- `context-data/` - Session storage directory
- `context-data/projects/test-project/sessions/` - Test session examples

**Dependencies Added:**
- `@modelcontextprotocol/sdk` (^1.0.4)
- `typescript` (^5.3.0)
- `@types/node` (^20.0.0)

## Breaking Changes

None - this is a new feature with no impact on existing functionality.

## Future Enhancements (Phase 2)

- [ ] Link related sessions (relatedSessions array)
- [ ] Export to markdown reports
- [ ] Attach diagrams and documents
- [ ] Web dashboard for browsing
- [ ] Advanced search with filters
- [ ] Session templates
- [ ] Bulk operations

## Benefits

### For Individual Developers
- Never lose context when switching chats
- Quick recall of past decisions
- Searchable project history
- Link conversations to commits

### For Teams (Future)
- Share context across team members
- Onboard new developers faster
- Document architectural decisions
- Create knowledge base from work sessions

## Success Metrics

Phase 1 is complete when:
- [x] MCP server runs without errors
- [x] All three tools work (add, query, timeline)
- [x] Can capture a real session with chat URL
- [x] Can query and get results back
- [x] README documents installation
- [x] Installation script automates setup

## References

- MCP Specification: https://modelcontextprotocol.io/
- MCP SDK: https://github.com/modelcontextprotocol/sdk

---

## Review Checklist

- [x] Code builds successfully (`npm run build`)
- [x] All tests pass (`npm run test`)
- [x] Installation script works on macOS
- [x] Documentation is comprehensive
- [x] Type safety enforced throughout
- [x] Error handling implemented
- [x] Example sessions provided

## Author Notes

This implementation prioritizes **simplicity** and **immediate usability** over complexity. The file-based storage is intentionally simple to get developers using it quickly. Based on real-world usage, we can iterate and add more sophisticated features in Phase 2.

The key insight: developers lose valuable context every time they start a new Claude chat. This MCP server makes that context persistent, searchable, and queryable.
