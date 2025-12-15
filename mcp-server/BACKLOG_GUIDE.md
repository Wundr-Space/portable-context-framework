# Azure DevOps Backlog & Wiki Export Guide

This guide shows how to generate Azure DevOps-friendly backlog items and wiki content from recorded development sessions. It uses the MCP server tools directly with Node.js so you can verify outputs before wiring them into Claude Desktop.

## Prerequisites
- Node.js 18+
- `npm install` completed in the `mcp-server` directory
- A built server bundle (`npm run build`)

## 1) Seed a Sample Project
Create a small set of sessions for a demo project named `demoapp`:

```bash
cd mcp-server
node - <<'NODE'
import { addContext } from './build/tools/add-context.js';

const sessions = [
  {
    project: 'demoapp',
    title: 'User authentication overhaul',
    type: 'feature',
    summary: 'Added refresh tokens with 7-day expiry and httpOnly cookie storage.',
    commits: ['abc1234', 'def5678'],
    chat_url: 'https://claude.ai/chat/demo-auth',
    tags: ['auth', 'backend']
  },
  {
    project: 'demoapp',
    title: 'Signup UX polish',
    type: 'feature',
    summary: 'Improved validation, added password strength meter, and clarified copy.',
    commits: ['a1b2c3d'],
    tags: ['frontend', 'ux']
  }
];

for (const session of sessions) {
  const result = await addContext(session);
  console.log(result);
}
NODE
```

This writes JSON session files under `context-data/projects/demoapp/sessions/`.

## 2) Generate the Backlog & Wiki Export
Invoke the backlog tool directly to synthesize Azure DevOps-ready artifacts:

```bash
node - <<'NODE'
import { generateBacklog } from './build/tools/generate-backlog.js';

const result = await generateBacklog({
  project: 'demoapp',
  azure_organization: 'https://dev.azure.com/example',
  azure_project: 'demoapp',
  repository_url: 'https://dev.azure.com/example/demoapp/_git/app',
  since: '30 days',
  limit: 10
});

console.log(result);
NODE
```

The command prints a JSON summary with links to the saved artifacts, and writes two files under `context-data/projects/demoapp/backlog/`:
- `*-azure-devops-backlog.json` — features, user stories, tasks, and traceability metadata
- `*-azure-devops-backlog.md` — wiki-ready markdown

## 3) Inspect the Outputs
Display the generated backlog JSON and wiki markdown:

```bash
ls context-data/projects/demoapp/backlog
cat context-data/projects/demoapp/backlog/*-azure-devops-backlog.json
cat context-data/projects/demoapp/backlog/*-azure-devops-backlog.md
```

These files can be imported into Azure DevOps (Features/User Stories) and published to your project wiki for PR reviewers.

## 4) Clean Up (Optional)
Remove the demo data if you no longer need it:

```bash
rm -rf context-data/projects/demoapp
```

You can repeat the steps with your own project name and real session data to generate production-ready backlog exports.
