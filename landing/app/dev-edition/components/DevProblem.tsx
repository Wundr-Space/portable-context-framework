import { X, Check } from 'lucide-react';

export function DevProblem() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
              The Intelligence Gap
            </h2>
            <p className="text-xl text-neutral-600">
              AI makes building fast. But fast without memory is dangerous.
            </p>
          </div>

          {/* The Scenario */}
          <div className="space-y-8">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-neutral-900">
                The Scenario
              </h3>

              <div className="space-y-4">
                <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-6">
                  <p className="text-sm font-semibold text-neutral-600 mb-3">
                    TEAM DISCUSSION (30 minutes)
                  </p>
                  <div className="space-y-3 text-neutral-700">
                    <p><strong>PM:</strong> "Users need to share stories"</p>
                    <p><strong>Designer:</strong> "Privacy is critical"</p>
                    <p><strong>CTO:</strong> "Cost must be under £0.10/user"</p>
                    <p><strong>Dev:</strong> "Firebase vs Cloudflare?"</p>
                    <p className="pt-3 border-t border-neutral-200 font-semibold text-neutral-900">
                      Team decides: Cloudflare + private links only
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-4">
                  <div className="text-4xl text-neutral-300">↓</div>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6">
                  <p className="text-sm font-semibold text-primary mb-3">
                    DEVELOPER TO CLAUDE CODE (2 minutes)
                  </p>
                  <div className="font-mono text-sm text-neutral-700 bg-neutral-900 text-neutral-100 p-4 rounded">
                    "Build sharing with Cloudflare and private links"
                  </div>
                </div>
              </div>
            </div>

            {/* What's Lost */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-red-900 flex items-center gap-3">
                <X className="w-7 h-7" />
                What Claude DOESN'T Get
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-neutral-700">
                    <strong>Why Cloudflare over Firebase</strong> (cost constraint)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-neutral-700">
                    <strong>Why private links only</strong> (privacy model)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-neutral-700">
                    <strong>Why no username search</strong> (prevent unwanted discovery)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-neutral-700">
                    <strong>Who made which calls</strong> (CTO cost decision, designer privacy)
                  </p>
                </div>
              </div>
            </div>

            {/* With PCF */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-green-900 flex items-center gap-3">
                <Check className="w-7 h-7" />
                PCF Captures All of This Before You Start Coding
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-neutral-700">
                    The constraints (cost per user, privacy requirements)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-neutral-700">
                    The options considered (Firebase, Supabase, Cloudflare)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-neutral-700">
                    The trade-offs accepted (less mature ecosystem)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-neutral-700">
                    Who decided what (CTO on cost, designer on privacy)
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-green-200">
                <p className="text-lg font-semibold text-neutral-900">
                  Result: Future teams understand your reasoning, not just your code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
