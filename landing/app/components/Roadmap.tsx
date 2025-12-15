import { Check, ArrowRight, Circle } from 'lucide-react';

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1: Development",
      status: "current",
      period: "Week 1 (December 2025)",
      intro: "WE ARE HERE — Teams building with Claude, Cursor, Windsurf lose decisions between sessions. Engineers six months later ask \"why did we build it this way?\" and get no answer.",
      items: [
        { text: "MCP server built", completed: true },
        { text: "Core tools: add_context, query_context, timeline", completed: true },
        { text: "GitHub repo storage", completed: true },
        { text: "Testing on real projects (Orphai, Ground Control)", completed: false }
      ],
      next: "Landing page, public launch"
    },
    {
      phase: "Phase 2: Public Beta",
      status: "next",
      period: "Week 2-3 (December 2025)",
      items: [
        { text: "Public GitHub repo", completed: false },
        { text: "Comprehensive documentation", completed: false },
        { text: "Demo video", completed: false },
        { text: "Waitlist beta invites", completed: false },
        { text: "CLI tool published to npm", completed: false },
        { text: "Community feedback loop", completed: false }
      ],
      metric: "Success metric: 50+ active beta users"
    },
    {
      phase: "Phase 3: Cloud Sync (Optional)",
      status: "future",
      period: "Weeks 4-6 (January 2026)",
      items: [
        { text: "Web dashboard for context exploration", completed: false },
        { text: "Optional cloud backup/sync", completed: false },
        { text: "Team collaboration features", completed: false },
        { text: "GitHub OAuth integration", completed: false },
        { text: "Context sharing beyond git", completed: false }
      ],
      model: "Model: Free local, paid cloud features"
    },
    {
      phase: "Phase 4: Beyond Coding",
      status: "future",
      period: "Q1-Q2 2026",
      items: [
        { text: "Documentation workflows", completed: false },
        { text: "Design system context", completed: false },
        { text: "Operations runbooks", completed: false },
        { text: "Enterprise features", completed: false },
        { text: "Advanced search & analytics", completed: false }
      ],
      vision: "Vision: Universal context infrastructure"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            Starting With Developers. Building for Collective Intelligence Everywhere.
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Anywhere teams make complex decisions at speed, context matters. We're starting where the pain is most acute—AI-assisted software development. But the pattern extends far beyond code.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`border rounded-xl p-8 space-y-6 ${
                phase.status === 'current'
                  ? 'bg-primary/5 border-primary/30 shadow-lg'
                  : phase.status === 'next'
                  ? 'bg-white border-neutral-300'
                  : 'bg-white border-neutral-200'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-neutral-900">
                      {phase.phase}
                    </h3>
                    {phase.status === 'current' && (
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full uppercase">
                        We are here
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-600 font-medium">
                    {phase.period}
                  </p>
                  {phase.intro && (
                    <p className="mt-4 text-base text-neutral-700 leading-relaxed">
                      {phase.intro}
                    </p>
                  )}
                  {phase.status === 'current' && (
                    <div className="mt-4">
                      <a
                        href="/dev-edition"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
                      >
                        Explore Developer Edition (MVP) →
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    {item.completed ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : phase.status === 'current' ? (
                      <Circle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <ArrowRight className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`${
                      item.completed
                        ? 'text-neutral-600'
                        : phase.status === 'current'
                        ? 'text-neutral-900 font-medium'
                        : 'text-neutral-600'
                    }`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              {(phase.next || phase.metric || phase.model || phase.vision) && (
                <div className="pt-4 border-t border-neutral-200">
                  {phase.next && (
                    <p className="text-sm text-neutral-600">
                      <strong>Next:</strong> {phase.next}
                    </p>
                  )}
                  {phase.metric && (
                    <p className="text-sm font-medium text-neutral-700">
                      {phase.metric}
                    </p>
                  )}
                  {phase.model && (
                    <p className="text-sm font-medium text-neutral-700">
                      {phase.model}
                    </p>
                  )}
                  {phase.vision && (
                    <p className="text-sm font-medium text-neutral-700">
                      {phase.vision}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
