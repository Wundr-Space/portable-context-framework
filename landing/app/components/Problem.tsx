import { RefreshCw, Search, BookOpen, Users } from 'lucide-react';

export function Problem() {
  const painPoints = [
    {
      icon: RefreshCw,
      title: "Starting Over, Every Time",
      description: "Claude Code, Codex, Cursor — every agent, every session starts blind. \"What did we decide about authentication?\" → You explain. Again."
    },
    {
      icon: Search,
      title: "Lost Decisions",
      description: "\"Why Firebase over Supabase?\" Buried in a chat from three weeks ago. Or was it a PR comment? Maybe Slack? Nobody remembers."
    },
    {
      icon: BookOpen,
      title: "Scattered Knowledge",
      description: "Architecture in Miro. Decisions in GitHub PRs. Discussions in AI chats. Code in repos. Nothing connects. Context lives nowhere."
    },
    {
      icon: Users,
      title: "Teams Without Context",
      description: "New teammate clones the repo. Gets code. Misses everything else. Six months of decisions, discussions, and \"why we built it this way\" — gone."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            The Cost of Context Fragmentation
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Every AI coding session starts fresh. Every decision gets lost. Every teammate starts blind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {point.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xl font-medium text-neutral-700 italic">
          It's not just inefficient. It's unsustainable.
        </p>
      </div>
    </section>
  );
}
