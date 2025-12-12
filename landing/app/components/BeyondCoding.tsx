import { Code, FileText, Palette, Server, ArrowRight } from 'lucide-react';

export function BeyondCoding() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Development",
      status: "WE ARE HERE",
      icon: Code,
      description: "AI-assisted coding with Claude, Codex, Cursor",
      items: [
        "Architecture decisions",
        "Technical trade-offs",
        "Implementation notes",
        "Code review context"
      ],
      statusLabel: "In development",
      ctaText: "Beta access via waitlist",
      ctaLink: "#waitlist",
      highlight: true
    },
    {
      phase: "Phase 2",
      title: "Documentation",
      status: "PLANNED Q1 2026",
      icon: FileText,
      description: "Technical writing & knowledge bases",
      items: [
        "Doc decisions & evolution",
        "Style guide choices",
        "Content strategy",
        "Writer collaboration"
      ],
      statusLabel: "Planned Q1 2026",
      ctaText: "Express interest",
      ctaLink: "#waitlist"
    },
    {
      phase: "Phase 3",
      title: "Design Systems",
      status: "PLANNED Q2 2026",
      icon: Palette,
      description: "Component libraries & brand guidelines",
      items: [
        "Design decisions",
        "Component evolution",
        "Brand rationale",
        "Cross-functional context"
      ],
      statusLabel: "Planned Q2 2026",
      ctaText: "Express interest",
      ctaLink: "#waitlist"
    },
    {
      phase: "Phase 4",
      title: "Operations",
      status: "PLANNED Q3 2026",
      icon: Server,
      description: "Runbooks, incidents, infrastructure",
      items: [
        "Incident learnings",
        "Process decisions",
        "Infrastructure choices",
        "On-call context"
      ],
      statusLabel: "Planned Q3 2026",
      ctaText: "Express interest",
      ctaLink: "#waitlist"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            Starting With Developers. Extending Everywhere.
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Anywhere teams use git, context can travel. We're starting where the pain is acute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={index}
                className={`border rounded-xl p-8 space-y-6 ${
                  phase.highlight
                    ? 'bg-primary/5 border-primary/30 shadow-lg'
                    : 'bg-white border-neutral-200'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      phase.highlight ? 'bg-primary/20' : 'bg-neutral-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        phase.highlight ? 'text-primary' : 'text-neutral-600'
                      }`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                        {phase.phase}
                      </p>
                      <h3 className="text-2xl font-bold text-neutral-900">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                  {phase.highlight && (
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      {phase.status}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-neutral-600">
                  {phase.description}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-2 text-sm text-neutral-600">
                      <span className={phase.highlight ? 'text-primary' : 'text-neutral-400'}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                  <p className="text-sm text-neutral-500">
                    Status: {phase.statusLabel}
                  </p>
                  <a
                    href={phase.ctaLink}
                    className={`inline-flex items-center gap-2 text-sm font-medium ${
                      phase.highlight
                        ? 'text-primary hover:text-primary-dark'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {phase.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing message */}
        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-neutral-700 italic">
            Git isn't just for code anymore. It's for knowledge that matters.
          </p>
        </div>
      </div>
    </section>
  );
}
