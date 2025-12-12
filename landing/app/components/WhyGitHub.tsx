import { Check, GitBranch } from 'lucide-react';

export function WhyGitHub() {
  const benefits = [
    {
      title: "Zero Lock-in",
      description: "Standard git repos. No proprietary formats. Don't like our tools? Fork the repo. Build your own."
    },
    {
      title: "Team Collaboration",
      description: "Clone → instant context for all teammates. New dev onboarding: git clone gives code AND context."
    },
    {
      title: "Version History",
      description: "Context evolves with your codebase. See why decisions were made when they were made."
    },
    {
      title: "Git Workflows",
      description: "Branch context for experimental features. PR reviews include context changes. Merge strategies for team consensus."
    },
    {
      title: "Platform Agnostic",
      description: "Works with GitHub, GitLab, Bitbucket, self-hosted. Any git remote, any tool."
    },
    {
      title: "Beyond Coding",
      description: "Same pattern extends to docs, design, operations. Anywhere teams use git."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            Why GitHub? Because Git is Universal.
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Git is the language of collaboration in tech. Your context should speak it too.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-neutral-900">
                Git workflow with context
              </h3>
            </div>

            <div className="space-y-6">
              {/* Feature branch */}
              <div className="bg-white border border-neutral-200 rounded-lg p-4">
                <p className="font-mono text-sm text-neutral-600 mb-3">
                  Feature branch:
                </p>
                <div className="pl-4 space-y-1 text-sm font-mono text-neutral-700">
                  <div>├── src/ <span className="text-neutral-500">(code changes)</span></div>
                  <div>└── .context/ <span className="text-neutral-500">(context changes)</span></div>
                  <div className="pl-8">└── sessions/</div>
                  <div className="pl-12 text-xs text-neutral-600">└── new-feature-exploration.json</div>
                </div>
              </div>

              {/* PR Review */}
              <div className="bg-white border border-neutral-200 rounded-lg p-4">
                <p className="font-mono text-sm text-neutral-600 mb-3">
                  PR Review shows:
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Code diff</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Context diff (why this approach?)</span>
                  </li>
                </ul>
              </div>

              {/* Merge */}
              <div className="bg-white border border-neutral-200 rounded-lg p-4">
                <p className="font-mono text-sm text-neutral-600 mb-3">
                  Merge to main:
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Code + Context together</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Full story preserved</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
