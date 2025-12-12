import { Pause } from 'lucide-react';

export function Mediate() {
  const mediateCaptures = [
    "What problem are we actually solving?",
    "What constraints are we working within?",
    "What options did we consider?",
    "Why did we choose this path?",
    "Who decided what, and why?",
    "What trade-offs are we accepting?"
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            The Missing Step: <em className="text-primary">Mediate</em>
          </h2>
        </div>

        {/* Cycle Visual */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-100 border-2 border-neutral-300 rounded-xl p-8 text-center">
              <div className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-4">
                Traditional:
              </div>
              <div className="text-lg font-medium text-neutral-700">
                Build → Measure → Learn → Build
              </div>
            </div>

            <div className="bg-white border-2 border-primary rounded-xl p-8 text-center shadow-lg">
              <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                With AI:
              </div>
              <div className="text-lg font-bold text-neutral-900">
                Discuss → <span className="text-primary">Mediate</span> → Build
              </div>
              <div className="text-sm text-neutral-600 mt-2">
                → Measure → Learn
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Pause className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  <strong className="text-neutral-900">Mediate</strong> is the deliberate pause where collective intelligence becomes explicit. Before rushing to code, capture:
                </p>
              </div>
            </div>

            <ul className="space-y-3 ml-16">
              {mediateCaptures.map((capture, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span className="text-neutral-700 text-lg">{capture}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl lg:text-2xl font-bold text-neutral-900 max-w-3xl mx-auto">
            PCF enforces the "mediate" step in AI-accelerated development.
          </p>
        </div>
      </div>
    </section>
  );
}
