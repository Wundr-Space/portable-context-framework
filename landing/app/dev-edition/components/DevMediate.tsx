import { Pause, Clock } from 'lucide-react';

export function DevMediate() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
              Mediate Before You Build
            </h2>
            <p className="text-xl text-neutral-600">
              AI can turn "idea" into "code" in minutes.<br />
              PCF forces a pause: <strong className="text-neutral-900">"What are we actually building and why?"</strong>
            </p>
          </div>

          {/* The Discipline */}
          <div className="bg-white border-2 border-primary rounded-xl p-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Pause className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-neutral-900">
                  The Discipline
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Before you open Claude Code. Before you type the prompt. Take 30 seconds to capture what you're about to build.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 rounded-xl p-6 space-y-3">
                <h4 className="font-semibold text-neutral-900">What PCF Asks:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>What problem are we solving?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>What constraints matter?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>What options did we consider?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Why this approach?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>What trade-offs are we accepting?</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                <h4 className="font-semibold text-neutral-900">What You Get:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Clarity before you code</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Context that survives the sprint</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Decisions explained to future-you</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Onboarding docs that write themselves</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Team alignment on the "why"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Time Investment */}
          <div className="bg-neutral-900 text-white rounded-xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Not a Blocker. A Gift to Future-You.</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-neutral-300">
              <div>
                <p className="text-lg mb-2"><strong className="text-white">30 seconds now:</strong></p>
                <p>Capture why you're building this</p>
              </div>
              <div>
                <p className="text-lg mb-2"><strong className="text-white">30 minutes saved later:</strong></p>
                <p>When someone asks "why did we build it this way?"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
