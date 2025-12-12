# Portable Context Framework - Developer Edition

> **Never lose context between AI coding sessions**

The Portable Context Framework (PCF) started as a vision for user-owned, portable digital context across AI systems. This repository is our first practical implementation: **a context capture system for AI-assisted development**.

## The Problem

When you code with AI agents (Claude Code, GitHub Copilot, Cursor, etc.), each session starts fresh:

- **Context is lost**: "What did we decide about authentication?" → You have to re-explain
- **Decisions are forgotten**: Why did we choose Firebase over Supabase? → Lost in chat history
- **Knowledge is scattered**: Architecture in diagrams, decisions in PRs, discussions in chats
- **Agents restart blind**: Every new session requires re-orientation

This creates friction, repetition, and lost productivity.

## The Solution

A lightweight system that captures **why** behind **what** as you code:
````
┌─────────────────────────────────────────────────┐
│  You + AI Agent                                 │
│  "Let's implement OAuth refresh tokens"         │
└─────────────────────────────────────────────────┘
                    ↓
         [Work happens: code, discuss, decide]
                    ↓
┌─────────────────────────────────────────────────┐
│  Context Captured Automatically                 │
│  • What: "Added refresh token endpoint"         │
│  • Why: "7-day expiry for security"             │
│  • How: Commits a1b2c3d, e4f5g6h                │
│  • Where: Chat link, PR, diagram                │
└─────────────────────────────────────────────────┘
                    ↓
         [Next session - days later]
                    ↓
┌─────────────────────────────────────────────────┐
│  New AI Agent                                   │
│  "Let me check what we did with auth..."        │
│  [Queries context automatically]                │
│  "I see we implemented OAuth with 7-day tokens" │
│  "Should we add rate limiting next?"            │
└─────────────────────────────────────────────────┘
````

**Context travels with your project** - not locked in any single platform.

## How It Works

1. **Capture**: As you work, context gets saved (commits, chats, decisions, diagrams)
2. **Store**: In a git-backed, portable format you own
3. **Query**: AI agents ask "what happened?" and get rich answers
4. **Continue**: Every session picks up where the last one left off

## Phased Development

### ✅ Phase 0: Foundation (Complete)
- [x] Repository created
- [x] Vision documented
- [x] Apache 2.0 licensed

### 🚧 Phase 1: Local MCP Server (Week 1 - IN PROGRESS)
**Goal**: Working tool for solo developers

**Deliverables**:
- MCP server that runs locally
- Three core tools: `add_context`, `query_context`, `get_timeline`
- File-based storage (git-backed JSON)
- Works with Claude Code/Desktop today

**Success Metric**: Creator uses it 5+ times in first week

### 📋 Phase 2: Real-World Testing (Week 2)
**Goal**: Validate on real projects + gauge interest

**Deliverables**:
- Use on 2+ active projects (Orphai, Ground Control)
- Static landing page (wundr.space/context)
- Waitlist email capture
- Demo video
- GitHub repo public with docs

**Success Metric**: Daily usage + 50+ waitlist signups

### 🌐 Phase 3: Cloud Infrastructure (Week 3-4)
**Goal**: Make it shareable and collaborative

**Deliverables** (only if Phase 1-2 succeed):
- REST API for context storage
- GitHub OAuth authentication
- Web dashboard (view/search/export)
- MCP server gains cloud sync option
- Beta invites to waitlist

**Success Metric**: 10+ active beta users

### 💰 Phase 4: Business Model (Week 5-6)
**Goal**: Sustainable open-source project

**Deliverables** (only if adoption is real):
- Pricing tiers (free local, paid cloud)
- Team collaboration features
- Stripe integration
- Marketing push

**Success Metric**: Revenue or clear path to it

## Core Principles

Built on Portable Context Framework values:

- ✅ **User-owned**: Your context lives in files you control
- ✅ **Portable**: Export anytime, works with any tool
- ✅ **Privacy-first**: Stored locally by default
- ✅ **Open standards**: JSON schema, git-based, documented
- ✅ **Interoperable**: Works across AI agents and platforms

## Current Status

**Phase**: 1 (Local MCP Server)  
**Status**: Building MVP  
**ETA**: End of Week 1 (Dec 18, 2025)

## Quick Start (Coming Soon)
````bash
# Install MCP server
npm install -g @wundr/context-mcp

# Configure Claude Desktop
wundr-context setup

# Start capturing
# (Happens automatically as you work with Claude)
````

## Architecture Preview
````
┌─────────────────────────────────────────────────┐
│         Claude Code / Desktop                   │
│         (or any MCP-compatible tool)            │
└─────────────────────────────────────────────────┘
                    ↓ MCP Protocol
┌─────────────────────────────────────────────────┐
│         Wundr Context MCP Server                │
│  Tools: add_context, query_context, timeline    │
└─────────────────────────────────────────────────┘
                    ↓ File I/O
┌─────────────────────────────────────────────────┐
│         Context Storage (Git-backed)            │
│  ./context-data/projects/{name}/sessions/...    │
└─────────────────────────────────────────────────┘
````

## For Developers

Want to contribute or follow along?

- 📖 [Design Docs](./docs/design/) (coming soon)
- 🐛 [Issues](https://github.com/Wundr-Space/portable-context-framework/issues)
- 💬 [Discussions](https://github.com/Wundr-Space/portable-context-framework/discussions)

## License

Apache 2.0 - See [LICENSE](./LICENSE)

## About Wundr Space

This project is developed by [Wundr Space](https://www.wundr.space/), an AI and technology consulting company on a mission to help humans reconnect through better technology.

**Contact**: [pcf@wundr.space](mailto:pcf@wundr.space)

---

**Current Focus**: Building Phase 1. Check back in a week to see it working!
