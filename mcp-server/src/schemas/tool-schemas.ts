/**
 * MCP Tool Schemas
 */

export const ADD_CONTEXT_SCHEMA = {
  name: "add_context",
  description: "Capture context for a development session with commits, chat links, and summary",
  inputSchema: {
    type: "object",
    properties: {
      project: {
        type: "string",
        description: "Project name (lowercase, no spaces)"
      },
      title: {
        type: "string",
        description: "Brief session title (e.g., 'OAuth implementation')"
      },
      type: {
        type: "string",
        enum: ["feature", "bugfix", "refactor", "docs", "exploration"],
        description: "Type of work done"
      },
      summary: {
        type: "string",
        description: "What was accomplished and why (2-4 sentences)"
      },
      commits: {
        type: "array",
        items: { type: "string" },
        description: "Git commit hashes (optional)"
      },
      chat_url: {
        type: "string",
        description: "Claude.ai chat URL (optional)"
      },
      pr_url: {
        type: "string",
        description: "GitHub PR URL (optional)"
      },
      tags: {
        type: "array",
        items: { type: "string" },
        description: "Searchable tags (e.g., ['auth', 'security'])"
      },
      status: {
        type: "string",
        enum: ["in-progress", "completed", "paused"],
        description: "Session status (defaults to 'completed')"
      }
    },
    required: ["project", "title", "type", "summary"]
  }
};

export const QUERY_CONTEXT_SCHEMA = {
  name: "query_context",
  description: "Search context sessions by project, keywords, or tags",
  inputSchema: {
    type: "object",
    properties: {
      project: {
        type: "string",
        description: "Filter by project name (optional)"
      },
      query: {
        type: "string",
        description: "Search text (matches title, summary, tags)"
      },
      tags: {
        type: "array",
        items: { type: "string" },
        description: "Filter by tags (AND logic)"
      },
      limit: {
        type: "number",
        description: "Max results to return (default: 10)"
      }
    }
  }
};

export const GET_TIMELINE_SCHEMA = {
  name: "get_timeline",
  description: "Get chronological timeline of sessions for a project",
  inputSchema: {
    type: "object",
    properties: {
      project: {
        type: "string",
        description: "Project name to show timeline for"
      },
      since: {
        type: "string",
        description: "ISO date or relative (e.g., '7 days', '2 weeks')"
      },
      limit: {
        type: "number",
        description: "Max sessions to return (default: 20)"
      }
    },
    required: ["project"]
  }
};

export const GENERATE_BACKLOG_SCHEMA = {
  name: "generate_backlog",
  description: "Convert captured sessions into Azure DevOps-ready backlog items and wiki content",
  inputSchema: {
    type: "object",
    properties: {
      project: {
        type: "string",
        description: "Project name to build backlog for"
      },
      azure_organization: {
        type: "string",
        description: "Azure DevOps organization URL (optional, for metadata)"
      },
      azure_project: {
        type: "string",
        description: "Azure DevOps project name (defaults to project)"
      },
      repository_url: {
        type: "string",
        description: "Repository URL for linking commits in generated guidance"
      },
      since: {
        type: "string",
        description: "Filter sessions captured since this date or relative window (e.g., '14 days')"
      },
      limit: {
        type: "number",
        description: "Maximum number of sessions to include (default 20)"
      }
    },
    required: ["project"]
  }
};
