/**
 * MCP Tool Schemas
 */
export declare const ADD_CONTEXT_SCHEMA: {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            project: {
                type: string;
                description: string;
            };
            title: {
                type: string;
                description: string;
            };
            type: {
                type: string;
                enum: string[];
                description: string;
            };
            summary: {
                type: string;
                description: string;
            };
            commits: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            chat_url: {
                type: string;
                description: string;
            };
            pr_url: {
                type: string;
                description: string;
            };
            tags: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            status: {
                type: string;
                enum: string[];
                description: string;
            };
        };
        required: string[];
    };
};
export declare const QUERY_CONTEXT_SCHEMA: {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            project: {
                type: string;
                description: string;
            };
            query: {
                type: string;
                description: string;
            };
            tags: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            limit: {
                type: string;
                description: string;
            };
        };
    };
};
export declare const GET_TIMELINE_SCHEMA: {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            project: {
                type: string;
                description: string;
            };
            since: {
                type: string;
                description: string;
            };
            limit: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
};
//# sourceMappingURL=tool-schemas.d.ts.map