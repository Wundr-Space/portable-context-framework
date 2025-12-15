import { ArrowRight, Github } from 'lucide-react';

export function DevHero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Developer Edition (MVP)
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
            Preserve Team Intelligence<br />While Building at AI Speed
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Your team discusses, debates, decides.<br />
            Then Claude builds. In 20 minutes.<br />
            <strong className="text-neutral-900">But only the code survives.</strong>
          </p>

          {/* Value Prop */}
          <div className="bg-white border-2 border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-neutral-700 leading-relaxed">
              <strong className="text-neutral-900">PCF captures collective intelligence as it emerges</strong>
              —before you lose it. The discussions. The constraints. The trade-offs. The "why."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Join Developer Beta
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

          {/* Social Proof */}
          <p className="text-sm text-neutral-500">
            Built by developers, for developers. Open source. Zero lock-in.
          </p>
        </div>
      </div>
    </section>
  );
}
