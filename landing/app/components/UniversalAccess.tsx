export function UniversalAccess() {
  const agents = [
    { name: "Claude Code", abbr: "C" },
    { name: "GitHub Codex", abbr: "Cx" },
    { name: "Cursor", abbr: "Cr" },
    { name: "Windsurf", abbr: "W" },
    { name: "Cline", abbr: "Cl" },
    { name: "Copilot", abbr: "Co" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            One Context Source. Every Agent.
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Not locked to Claude. Not locked to any tool. If it can read git, it can read your context.
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-neutral-900">
                  {agent.abbr}
                </span>
              </div>
              <p className="font-medium text-neutral-900 text-sm">
                {agent.name}
              </p>
            </div>
          ))}
        </div>

        {/* Placeholder for future agents */}
        <div className="bg-neutral-100 border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center mb-12">
          <div className="w-16 h-16 bg-neutral-200 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl font-bold text-neutral-400">?</span>
          </div>
          <p className="font-medium text-neutral-600">Your Agent Here</p>
        </div>

        {/* Message */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xl text-neutral-700 font-medium">
            All reading from the same GitHub repo.
          </p>
          <p className="text-lg text-neutral-600">
            No more explaining your project differently to each agent.
            <br />
            Switch tools freely. Context travels with you.
          </p>
        </div>
      </div>
    </section>
  );
}
