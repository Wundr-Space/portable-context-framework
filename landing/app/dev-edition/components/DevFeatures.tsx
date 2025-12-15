import { Zap, GitBranch, Terminal, Star } from 'lucide-react';

export function DevFeatures() {
  const features = [
    {
      icon: Zap,
      badge: "Recommended",
      title: "MCP Server",
      subtitle: "Real-time capture during Claude Code sessions",
      description: "Prompts you: \"Let me save what we just decided.\" Captures session summary, commits, chat links, and decisions as they happen.",
      setup: "5 minute setup",
      useCases: [
        "Claude Code users",
        "Real-time capture",
        "Automatic prompts"
      ]
    },
    {
      icon: GitBranch,
      badge: "Automatic",
      title: "Git Hooks",
      subtitle: "Triggered on significant commits",
      description: "When you commit >50 lines or use keywords, PCF asks: \"Capture context for this commit?\" Quick form saves decision summary alongside code.",
      setup: "Works with any tool",
      useCases: [
        "Team repositories",
        "Any AI coding tool",
        "Automated capture"
      ]
    },
    {
      icon: Terminal,
      badge: "Universal",
      title: "CLI Tool",
      subtitle: "Manual capture, query, and timeline",
      description: "Full control when you need it. Capture context manually, query past decisions, view timeline of changes. Works with any workflow.",
      setup: "npm install -g",
      useCases: [
        "Any editor/tool",
        "Quick queries",
        "Team exploration"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            Three Ways to Capture
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Choose the method that fits your workflow. Use all three. Mix and match.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="grid lg:grid-cols-[1fr,2fr] gap-8">
                  {/* Left: Icon and Title */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        {feature.badge && (
                          <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full uppercase">
                            {feature.badge === "Recommended" && <Star className="w-3 h-3" />}
                            {feature.badge}
                          </div>
                        )}
                        <h3 className="text-2xl font-bold text-neutral-900">
                          {feature.title}
                        </h3>
                        <p className="text-sm font-semibold text-neutral-600">
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-200">
                      <p className="text-sm font-semibold text-neutral-500 mb-2">
                        Setup:
                      </p>
                      <p className="text-neutral-700">{feature.setup}</p>
                    </div>
                  </div>

                  {/* Right: Description and Use Cases */}
                  <div className="space-y-6">
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      {feature.description}
                    </p>

                    <div>
                      <p className="text-sm font-semibold text-neutral-600 mb-3">
                        Best for:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.useCases.map((useCase, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-700"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Example */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-neutral-900 rounded-xl p-8 space-y-4">
            <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">
              Example: Query with CLI
            </p>
            <div className="font-mono text-sm space-y-2">
              <div className="text-neutral-400">$ pcf query "why cloudflare"</div>
              <div className="text-green-400 mt-4">
                → Decision: Use Cloudflare for storage
                <br />
                → Date: 2024-11-15
                <br />
                → Reason: Cost constraint (&lt;£0.10/user)
                <br />
                → Decided by: CTO
                <br />
                → Trade-off: Less mature ecosystem than Firebase
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
