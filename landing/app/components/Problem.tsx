export function Problem() {
  const lossExamples = [
    {
      title: "Collective Intelligence Lost",
      description: "When 5 people discuss a solution, valuable knowledge emerges from the conversation. AI coding lets you execute immediately—but only one person's understanding makes it to the code."
    },
    {
      title: "Decisions Without Rationale",
      description: "\"Why Firebase over Supabase?\" The chat where you debated cost constraints, discussed trade-offs, and reached consensus—gone. Only the implementation remains."
    },
    {
      title: "Non-Technical Context Vanishes",
      description: "Business goals, user needs, privacy considerations, cost constraints—the non-technical context that informed technical decisions disappears the moment you start coding."
    },
    {
      title: "Teams Without Memory",
      description: "New teammates get the code. They miss six months of \"why we built it this way.\" They rebuild solutions. They repeat mistakes. Institutional knowledge dies with velocity."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            The Cost of Context Fragmentation
          </h2>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <blockquote className="problem-story border-l-4 border-primary pl-8 py-6 text-lg text-neutral-700 leading-relaxed space-y-4 bg-neutral-50 rounded-r-lg pr-8">
            <p>
              "We spent an hour in a room—product, design, engineering. We debated trade-offs, considered constraints, reached consensus. Then our engineer opened Claude Code and built it. In 20 minutes.
            </p>
            <p className="font-semibold text-neutral-900 text-xl">
              A month later, new team member asks: 'Why did we build it this way?'
            </p>
            <p>
              Nobody remembers. The discussion is gone. Only the code remains.
            </p>
            <p className="italic">
              AI makes us fast. But fast without memory is just... fast."
            </p>
          </blockquote>
        </div>

        {/* Real Cost */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 text-center mb-12">
            The Real Cost Isn't Speed—It's Lost Intelligence
          </h3>

          <div className="space-y-8">
            {lossExamples.map((example, index) => (
              <div
                key={index}
                className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:border-primary/30 transition-colors"
              >
                <h4 className="text-xl font-bold text-neutral-900 mb-3">
                  {example.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {example.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
