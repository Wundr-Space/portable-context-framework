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

### Prerequisites

- **Node.js 18+**: Install from [nodejs.org](https://nodejs.org/)
- **Claude Desktop**: Download from [claude.ai/download](https://claude.ai/download)

### Automatic Installation (Recommended)

Run the installation script from the `mcp-server` directory:

```bash
cd mcp-server
./install.sh
```

The script will:
- ✓ Check Node.js version
- ✓ Build the MCP server
- ✓ Detect Claude Desktop config location
- ✓ Backup existing config
- ✓ Add wundr-context to your MCP servers
- ✓ Provide next steps

**Then restart Claude Desktop** (quit and reopen).

### Manual Installation

If the automatic installer doesn't work:

#### 1. Build the server

```bash
cd mcp-server
npm install
npm run build
```

#### 2. Find your Claude Desktop config

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
**Linux**: `~/.config/Claude/claude_desktop_config.json`

Create the directory if it doesn't exist:
```bash
# macOS
mkdir -p "$HOME/Library/Application Support/Claude"

# Linux
mkdir -p ~/.config/Claude
```

#### 3. Add to config file

Edit `claude_desktop_config.json` and add (replace path with your actual path):

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

**Get the absolute path:**
```bash
cd mcp-server
echo "$(pwd)/build/index.js"
```

#### 4. Restart Claude Desktop

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

### Claude Desktop config directory doesn't exist

If you don't have a Claude folder in Application Support:

1. **Make sure Claude Desktop is installed**
   - Download from [claude.ai/download](https://claude.ai/download)
   - Launch it at least once to create the config directory

2. **Create the directory manually**:
   ```bash
   # macOS
   mkdir -p "$HOME/Library/Application Support/Claude"

   # Linux
   mkdir -p ~/.config/Claude

   # Windows (PowerShell)
   New-Item -ItemType Directory -Force -Path "$env:APPDATA\Claude"
   ```

3. **Run the installer** - it will create the config file:
   ```bash
   cd mcp-server
   ./install.sh
   ```

### Server not showing up in Claude

1. Check Claude Desktop config path is correct
2. Verify the absolute path to `build/index.js` in the config
3. Restart Claude Desktop completely (quit and reopen)
4. Check Claude Desktop logs for errors:
   - macOS: `~/Library/Logs/Claude/`
   - Windows: `%APPDATA%\Claude\logs\`

### Tools not working

1. Ensure `npm run build` completed successfully
2. Check that `build/` directory exists with compiled JS files
3. Verify Node.js version >= 18:
   ```bash
   node -v  # should show v18.0.0 or higher
   ```

### Installation script fails

If `./install.sh` doesn't work:
1. Make sure it's executable: `chmod +x install.sh`
2. Use manual installation method (see Manual Installation section)
3. Check that Python 3 is installed (needed for JSON merging)

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
