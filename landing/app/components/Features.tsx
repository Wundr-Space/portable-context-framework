import { Globe, Users, Package, GitBranch, Unlock, Rocket, Brain, Pause, FileText } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Collective Intelligence Preserved",
      description: "Capture knowledge as it emerges from team discussions, not just individual implementations. Technical and non-technical voices matter equally."
    },
    {
      icon: Pause,
      title: "Reflection Before Action",
      description: "No code without context. The \"mediate\" step ensures teams think before they build, even at AI speed."
    },
    {
      icon: FileText,
      title: "Decisions, Not Just Outcomes",
      description: "Preserve the WHY and the HOW, not just the WHAT. Future teams need to understand your reasoning, not just your results."
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "Works with any AI agent or tool. Not locked to any platform."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Git-native sharing. Clone once, context forever."
    },
    {
      icon: Package,
      title: "GitHub-Native",
      description: "Lives where your code lives. Familiar workflows."
    },
    {
      icon: GitBranch,
      title: "Branchable & Mergeable",
      description: "Fork, branch, PR your context. Just like code."
    },
    {
      icon: Unlock,
      title: "Open Format",
      description: "JSON anyone can read. No proprietary lock-in."
    },
    {
      icon: Rocket,
      title: "Extensible",
      description: "Start with code. Extend to docs, design, ops."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            Built on Principles That Matter
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all space-y-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
