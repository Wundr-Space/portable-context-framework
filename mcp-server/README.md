# Wundr Context MCP Server

An MCP (Model Context Protocol) server that lets Claude capture and query development context across projects.

## What It Does

Captures development sessions with:
- Session titles and summaries
- Git commit hashes
- Chat URLs (Claude.ai links)
- GitHub PR links
- Searchable tags
- Project organization

Query past sessions by:
- Project name
- Keywords (searches title, summary, tags)
- Tags (with AND logic)
- Timeline view

## Installation

### 1. Install Dependencies

```bash
cd mcp-server
npm install
```

### 2. Build

```bash
npm run build
```

### 3. Configure Claude Desktop

Add to your Claude Desktop config file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "wundr-context": {
      "command": "node",
      "args": ["/absolute/path/to/portable-context-framework/mcp-server/build/index.js"]
    }
  }
}
```

Replace `/absolute/path/to/` with your actual path.

### 4. Restart Claude Desktop

Quit and restart Claude Desktop to load the MCP server.

## Usage

### Capture a Session

```
You: I just implemented OAuth refresh tokens for Orphai. We added a refresh endpoint
with 7-day expiry and stored tokens in httpOnly cookies for security.

Claude: [uses add_context tool]
```

The tool captures:
- Title and summary
- Commit hashes (if provided)
- Chat URL (current conversation)
- Tags for searching
- Timestamp and project name

### Query Context

```
You: What did we decide about authentication?

Claude: [uses query_context with "authentication"]
Claude: I found 3 sessions about authentication:
1. OAuth refresh token implementation (2025-12-12)
   - Added refresh endpoint with 7-day expiry...
```

### View Timeline

```
You: Show me what we've been working on for Orphai

Claude: [uses get_timeline for project "orphai"]
Claude: Timeline for orphai (12 sessions):
- 2025-12-12
  - 14:30 OAuth refresh token implementation (feature)
  - 10:15 Database migration for users table (refactor)
- 2025-12-11
  - 16:00 API error handling (bugfix)
```

## MCP Tools

### add_context

Capture a development session.

**Required Parameters**:
- `project` - Project name (lowercase, no spaces)
- `title` - Brief session title
- `type` - One of: feature, bugfix, refactor, docs, exploration
- `summary` - What was accomplished and why (2-4 sentences)

**Optional Parameters**:
- `commits` - Array of git commit hashes
- `chat_url` - Claude.ai chat URL
- `pr_url` - GitHub PR URL
- `tags` - Array of searchable tags
- `status` - One of: in-progress, completed (default), paused

**Example**:
```json
{
  "project": "orphai",
  "title": "OAuth refresh token implementation",
  "type": "feature",
  "summary": "Added refresh token endpoint with 7-day expiry. Tokens stored in httpOnly cookies for security. Implemented automatic renewal on API calls.",
  "commits": ["a1b2c3d", "e4f5g6h"],
  "chat_url": "https://claude.ai/chat/abc123",
  "tags": ["authentication", "security", "backend"]
}
```

### query_context

Search sessions by text, tags, or project.

**Optional Parameters**:
- `project` - Filter by project name
- `query` - Search text (matches title, summary, tags)
- `tags` - Filter by tags (must have ALL tags)
- `limit` - Max results (default: 10)

**Example**:
```json
{
  "project": "orphai",
  "query": "authentication",
  "tags": ["security"],
  "limit": 5
}
```

### get_timeline

Get chronological timeline for a project.

**Required Parameters**:
- `project` - Project name

**Optional Parameters**:
- `since` - ISO date or relative (e.g., "7 days", "2 weeks")
- `limit` - Max sessions (default: 20)

**Example**:
```json
{
  "project": "orphai",
  "since": "7 days",
  "limit": 10
}
```

## Data Storage

Sessions are stored as JSON files in:
```
context-data/projects/{project}/sessions/{timestamp}-{id}.json
```

Example:
```
context-data/
└── projects/
    └── orphai/
        └── sessions/
            ├── 2025-12-12T143022Z-abc123.json
            └── 2025-12-12T101545Z-def456.json
```

All files are git-tracked, providing version history for your context.

## Development

### Run in watch mode

```bash
npm run watch
```

### Test manually

```bash
npm run build
node build/index.js
```

The server communicates over stdio (standard input/output). It's designed to be run by Claude Desktop.

## Troubleshooting

### Server not showing up in Claude

1. Check Claude Desktop config path is correct
2. Verify the absolute path to `build/index.js`
3. Restart Claude Desktop completely
4. Check Claude Desktop logs for errors

### Tools not working

1. Ensure `npm run build` completed successfully
2. Check that `build/` directory exists with compiled JS files
3. Verify Node.js version >= 18

## Next Steps

Phase 1 (Current):
- [x] Basic MCP server with 3 tools
- [x] File-based JSON storage
- [x] Query and timeline features

Phase 2 (Future):
- [ ] Link related sessions
- [ ] Export to markdown reports
- [ ] Diagram/document attachments
- [ ] Web dashboard for browsing

## License

MIT
