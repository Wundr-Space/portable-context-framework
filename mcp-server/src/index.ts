#!/usr/bin/env node

/**
 * Wundr Context MCP Server
 * Captures and queries development context
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError
} from "@modelcontextprotocol/sdk/types.js";

import { addContext } from "./tools/add-context.js";
import { queryContext } from "./tools/query-context.js";
import { getTimeline } from "./tools/get-timeline.js";
import {
  ADD_CONTEXT_SCHEMA,
  QUERY_CONTEXT_SCHEMA,
  GET_TIMELINE_SCHEMA
} from "./schemas/tool-schemas.js";
import type { AddContextInput, QueryContextInput, GetTimelineInput } from "./lib/types.js";

// Create server
const server = new Server(
  {
    name: "wundr-context",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Register tool list handler
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      ADD_CONTEXT_SCHEMA,
      QUERY_CONTEXT_SCHEMA,
      GET_TIMELINE_SCHEMA
    ]
  };
});

// Register tool call handler
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    const { name, arguments: args } = request.params;

    switch (name) {
      case "add_context": {
        const input = args as unknown as AddContextInput;
        const result = await addContext(input);
        return {
          content: [
            {
              type: "text",
              text: result
            }
          ]
        };
      }

      case "query_context": {
        const input = args as unknown as QueryContextInput;
        const result = await queryContext(input);
        return {
          content: [
            {
              type: "text",
              text: result
            }
          ]
        };
      }

      case "get_timeline": {
        const input = args as unknown as GetTimelineInput;
        const result = await getTimeline(input);
        return {
          content: [
            {
              type: "text",
              text: result
            }
          ]
        };
      }

      default:
        throw new McpError(
          ErrorCode.MethodNotFound,
          `Unknown tool: ${name}`
        );
    }
  } catch (error) {
    if (error instanceof McpError) {
      throw error;
    }

    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new McpError(
      ErrorCode.InternalError,
      `Tool execution failed: ${errorMessage}`
    );
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Wundr Context MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
