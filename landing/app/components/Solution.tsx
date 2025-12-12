import { Download, Database, Zap } from 'lucide-react';

export function Solution() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            Context That Lives With Your Code
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Store context in GitHub. Version it like code. Access it from any tool.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Capture */}
          <div className="bg-white border border-neutral-200 rounded-xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Capture</h3>
            </div>

            <p className="text-neutral-600">
              As you work, context accumulates:
            </p>

            <ul className="space-y-3 text-neutral-600">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Git commits: what changed</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Chat links: where decisions happened</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Architecture diagrams: how it fits together</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Meeting notes: who decided what</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>ADRs: why this approach</span>
              </li>
            </ul>

            <div className="border-t border-neutral-200 pt-6">
              <p className="font-medium text-neutral-900 mb-3">Tools to capture:</p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>→ MCP server (Claude Code, etc.)</li>
                <li>→ CLI commands (any agent)</li>
                <li>→ Git hooks (automatic)</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Store in GitHub */}
          <div className="bg-white border border-neutral-200 rounded-xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Store in GitHub</h3>
            </div>

            <p className="text-neutral-600">
              Context commits to your repo:
            </p>

            <pre className="bg-neutral-900 text-neutral-100 rounded-lg p-4 overflow-x-auto text-sm font-mono">
{`myproject/
  src/           ← Your code
  .context/      ← Your context
    sessions/
      2025-12-12-oauth.json
    architecture/
      auth-flow.mermaid
      api-structure.md
    decisions/
      adr-001-firebase.md`}
            </pre>

            <ul className="space-y-3 text-neutral-600">
              <li className="flex gap-2">
                <span className="text-secondary">•</span>
                <span>Version controlled</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">•</span>
                <span>Team accessible</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">•</span>
                <span>Fork, branch, merge</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">•</span>
                <span>No proprietary formats</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Universal Access */}
          <div className="bg-white border border-neutral-200 rounded-xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-warm" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Universal Access</h3>
            </div>

            <p className="text-neutral-600">
              ANY agent or tool reads it:
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-neutral-900 mb-2">AI Agents:</p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Claude Code (via MCP)</li>
                  <li>• GitHub Codex (via CLI)</li>
                  <li>• Cursor (via files)</li>
                  <li>• Windsurf (via CLI)</li>
                  <li>• [Future agents]</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-neutral-900 mb-2">Humans:</p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Browse on GitHub</li>
                  <li>• PR reviews with context</li>
                  <li>• Onboarding docs</li>
                  <li>• Team knowledge base</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <p className="font-semibold text-neutral-900">
                One source. Infinite access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
