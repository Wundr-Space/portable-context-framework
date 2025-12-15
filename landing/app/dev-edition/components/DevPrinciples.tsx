import { Github, Unlock, Repeat, Users, Zap } from 'lucide-react';

export function DevPrinciples() {
  const principles = [
    {
      icon: Github,
      title: "Git-Native",
      description: "Context lives in your repo (.context/). Versions with your code. Fork, branch, merge like code. Works with GitHub, GitLab, Bitbucket."
    },
    {
      icon: Unlock,
      title: "Zero Lock-In",
      description: "Standard JSON/Markdown format. No proprietary formats. Don't like our tools? Fork and build your own. Context is yours, always."
    },
    {
      icon: Repeat,
      title: "Tool-Agnostic",
      description: "Works with Claude Code, Cursor, Windsurf, Cline, etc. MCP for Claude, CLI for everything else. Switch tools freely, context travels."
    },
    {
      icon: Users,
      title: "Team-First",
      description: "Multi-participant capture (who said what). PR reviews include context changes. New team members get full story on clone. Shared understanding."
    },
    {
      icon: Zap,
      title: "Minimal Friction",
      description: "Capture takes 30 seconds, not 30 minutes. Auto-prompts at natural points. Optional, not mandatory. Query is instant: pcf query \"auth\""
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            Developer Edition Principles
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Built by developers, for developers. No BS. No lock-in. Just context that works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all space-y-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">
                  {principle.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Context Structure Example */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            What Your Context Looks Like
          </h3>
          <div className="bg-neutral-900 rounded-xl p-8">
            <pre className="text-sm text-neutral-100 font-mono overflow-x-auto">
{`myproject/
  src/                          ← Your code
  .context/                     ← Your context
    decisions/
      2024-11-15-storage-choice.md
      2024-11-20-auth-approach.md
    discussions/
      2024-11-15-team-sync.json
    sessions/
      2024-11-16-oauth-impl.json
    constraints/
      cost-per-user.md
      privacy-requirements.md
    trade-offs/
      cloudflare-vs-firebase.md`}
            </pre>
          </div>
          <p className="text-center text-neutral-600 mt-4">
            Standard files. Standard git. Anyone can read it. Any tool can access it.
          </p>
        </div>
      </div>
    </section>
  );
}
