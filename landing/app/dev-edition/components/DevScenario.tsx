export function DevScenario() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
              Team Onboarding That Actually Works
            </h2>
            <p className="text-xl text-neutral-600">
              Imagine saying: "Clone the repo, everything's there—code and context."
            </p>
          </div>

          {/* Without PCF */}
          <div className="space-y-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 font-bold text-xl">
                  ✗
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-red-900">
                    Without PCF
                  </h3>
                  <div className="space-y-4 text-neutral-700">
                    <div className="bg-white border border-red-200 rounded-lg p-4">
                      <p className="font-semibold text-neutral-900 mb-2">New dev:</p>
                      <p>"Why did we build it this way?"</p>
                    </div>
                    <div className="bg-white border border-red-200 rounded-lg p-4">
                      <p className="font-semibold text-neutral-900 mb-2">Current answer:</p>
                      <p className="text-neutral-600">"Check the PR comments?"</p>
                      <p className="text-sm text-neutral-500 mt-2">(Scattered. Incomplete. Missing non-technical context.)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* With PCF */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-xl">
                  ✓
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-bold text-green-900">
                    With PCF
                  </h3>
                  <div className="space-y-4 text-neutral-700">
                    <div className="bg-white border border-green-200 rounded-lg p-4">
                      <p className="font-semibold text-neutral-900 mb-2">New dev:</p>
                      <p>"Why Cloudflare?"</p>
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-4">
                      <p className="font-semibold text-neutral-900 mb-3">PCF answer:</p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Decision:</strong> Use Cloudflare for storage</p>
                        <p><strong>Constraint:</strong> Cost must be &lt;£0.10/user</p>
                        <p><strong>Options considered:</strong> Firebase, Supabase, Cloudflare</p>
                        <p><strong>Why Cloudflare:</strong> Free tier meets cost constraint</p>
                        <p><strong>Decided by:</strong> CTO</p>
                        <p><strong>Date:</strong> 2024-11-15</p>
                        <p><strong>Trade-off accepted:</strong> Less mature ecosystem</p>
                        <p className="pt-2 text-neutral-600 italic">
                          → Related discussion: team-sync-2024-11-15.json
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Result */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <p className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4">
              Result: New teammates understand your reasoning, not just your code.
            </p>
            <p className="text-lg text-neutral-600">
              No more "check Slack from March" or "ask Sarah, she built that."<br />
              Everything's in the repo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
