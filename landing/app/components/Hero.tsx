import { ArrowRight, Github } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Context as Code
              </h1>
              <p className="text-2xl lg:text-3xl text-neutral-700 font-medium">
                Universal. Portable. Yours.
              </p>
            </div>

            <div className="space-y-4 text-lg text-neutral-600">
              <p>
                Your codebase tells the story of <strong>WHAT</strong> changed.
                <br />
                Your context tells the story of <strong>WHY</strong>.
              </p>
              <p>
                Every AI coding agent can read it.
                <br />
                Every teammate who clones your repo gets the full story.
                <br />
                Every decision, discussion, and diagram — versioned in GitHub.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Join Early Access Waitlist
              </a>
              <a
                href="https://github.com/Wundr-Space/portable-context-framework"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-neutral-300 text-neutral-900 font-semibold rounded-lg hover:border-neutral-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div className="text-center text-sm font-medium text-neutral-500 uppercase tracking-wide">
                Universal Access
              </div>

              {/* Multiple Agents */}
              <div className="flex justify-around items-center py-4 border-b border-neutral-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-primary">C</span>
                  </div>
                  <div className="text-xs text-neutral-600">Claude</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-secondary">Cx</span>
                  </div>
                  <div className="text-xs text-neutral-600">Codex</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-warm">Cr</span>
                  </div>
                  <div className="text-xs text-neutral-600">Cursor</div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="text-center text-neutral-400">↓</div>

              {/* GitHub */}
              <div className="bg-neutral-900 text-white rounded-lg p-6 text-center">
                <Github className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Context in GitHub</div>
                <div className="text-sm text-neutral-400 mt-1">
                  .context/ directory
                </div>
              </div>

              {/* Arrow Down */}
              <div className="text-center text-neutral-400">↓</div>

              {/* Access */}
              <div className="text-center text-sm text-neutral-600">
                <strong>Accessible by any tool</strong>
                <br />
                No lock-in. Standard git repos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
