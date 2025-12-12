import { Plug, GitBranch, Terminal } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            Three Ways to Capture Context
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* MCP Server */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-neutral-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Plug className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  MCP Server
                </h3>
                <p className="text-sm text-primary font-medium">
                  Recommended for Claude
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-medium text-neutral-900">
                Model Context Protocol
              </p>

              <p className="text-sm text-neutral-600">
                Claude automatically captures and queries context:
              </p>

              <div className="bg-white border border-neutral-200 rounded-lg p-4 space-y-3 text-sm">
                <div className="space-y-1">
                  <p className="text-neutral-600 italic">
                    "Let me save what we just did"
                  </p>
                  <p className="text-neutral-500 text-xs">
                    → Context captured with chat link, commits, summary
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-neutral-600 italic">
                    "What did we decide about authentication?"
                  </p>
                  <p className="text-neutral-500 text-xs">
                    → Retrieves past sessions automatically
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-neutral-700 mb-2">
                  Works with:
                </p>
                <p className="text-sm text-neutral-600">
                  Claude Code, Claude Desktop
                </p>
              </div>

              <div className="border-t border-neutral-200 pt-4">
                <p className="text-sm font-medium text-neutral-700 mb-2">
                  Setup:
                </p>
                <pre className="bg-neutral-900 text-neutral-100 rounded-lg p-3 overflow-x-auto text-xs font-mono">
{`{
  "mcpServers": {
    "wundr-context": {
      "command": "npx",
      "args": [
        "@wundr/context-mcp"
      ]
    }
  }
}`}
                </pre>
              </div>

              <a
                href="https://github.com/Wundr-Space/portable-context-framework"
                className="block text-center text-sm text-primary hover:text-primary-dark font-medium"
              >
                MCP Setup Guide →
              </a>
            </div>
          </div>

          {/* Git Hooks */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-neutral-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Git Hooks
                </h3>
                <p className="text-sm text-secondary font-medium">
                  Automatic
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-medium text-neutral-900">
                Capture on Commit
              </p>

              <p className="text-sm text-neutral-600">
                Prompt for context on significant commits:
              </p>

              <div className="bg-neutral-900 text-neutral-100 rounded-lg p-4 space-y-2 text-sm font-mono">
                <div className="text-green-400">$ git commit -m "feat: add OAuth"</div>
                <div className="text-neutral-300">Capture context? (y/N) y</div>
                <div className="text-neutral-300">Session: OAuth implementation</div>
                <div className="text-neutral-300">Chat URL: [paste]</div>
                <div className="text-green-400">✓ Context saved & committed</div>
              </div>

              <div>
                <p className="text-sm font-medium text-neutral-700 mb-2">
                  Works with:
                </p>
                <p className="text-sm text-neutral-600">
                  Any workflow, any agent
                </p>
              </div>

              <div className="border-t border-neutral-200 pt-4">
                <p className="text-sm font-medium text-neutral-700 mb-2">
                  Setup:
                </p>
                <pre className="bg-neutral-900 text-neutral-100 rounded-lg p-3 overflow-x-auto text-xs font-mono">
{`wundr-context init
# Installs git hooks`}
                </pre>
              </div>

              <a
                href="https://github.com/Wundr-Space/portable-context-framework"
                className="block text-center text-sm text-secondary hover:text-secondary-dark font-medium"
              >
                Git Hooks Guide →
              </a>
            </div>
          </div>

          {/* CLI Tool */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-neutral-300">
              <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center">
                <Terminal className="w-6 h-6 text-warm" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  CLI Tool
                </h3>
                <p className="text-sm text-warm font-medium">
                  Universal
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-medium text-neutral-900">
                Manual Control
              </p>

              <p className="text-sm text-neutral-600">
                Use from any terminal, any agent:
              </p>

              <div className="bg-neutral-900 text-neutral-100 rounded-lg p-4 space-y-2 text-xs font-mono">
                <div className="text-neutral-400"># Add context</div>
                <div className="text-green-400">wundr-context add \</div>
                <div className="text-green-400">  --title "OAuth implementation" \</div>
                <div className="text-green-400">  --commits abc123,def456</div>

                <div className="text-neutral-400 pt-2"># Query context</div>
                <div className="text-green-400">wundr-context query "auth decisions"</div>

                <div className="text-neutral-400 pt-2"># Timeline view</div>
                <div className="text-green-400">wundr-context timeline --since "1 week"</div>
              </div>

              <div>
                <p className="text-sm font-medium text-neutral-700 mb-2">
                  Works with:
                </p>
                <p className="text-sm text-neutral-600">
                  Everything (Codex, Cursor, any shell)
                </p>
              </div>

              <div className="border-t border-neutral-200 pt-4">
                <p className="text-sm font-medium text-neutral-700 mb-2">
                  Setup:
                </p>
                <pre className="bg-neutral-900 text-neutral-100 rounded-lg p-3 overflow-x-auto text-xs font-mono">
{`npm install -g @wundr/context-cli`}
                </pre>
              </div>

              <a
                href="https://github.com/Wundr-Space/portable-context-framework"
                className="block text-center text-sm text-warm hover:text-warm font-medium"
              >
                CLI Documentation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
