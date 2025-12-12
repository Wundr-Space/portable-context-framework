import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Left: Brand */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-900">
              Portable Context Framework
            </h3>
            <p className="text-sm text-neutral-600">
              Context as Code. Universal, portable, yours.
            </p>
            <p className="text-sm text-neutral-600">
              Part of the{' '}
              <a
                href="https://wundr.space"
                className="underline hover:text-neutral-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wundr Space
              </a>{' '}
              family
            </p>
          </div>

          {/* Middle: Links */}
          <div>
            <h4 className="font-medium text-neutral-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/Wundr-Space/portable-context-framework"
                  className="text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Wundr-Space/portable-context-framework#readme"
                  className="text-neutral-600 hover:text-neutral-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Wundr-Space/portable-context-framework/discussions"
                  className="text-neutral-600 hover:text-neutral-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Community Discussions
                </a>
              </li>
              <li>
                <a
                  href="https://wundr.space/privacy.html"
                  className="text-neutral-600 hover:text-neutral-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h4 className="font-medium text-neutral-900 mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:pcf@wundr.space"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  pcf@wundr.space
                </a>
              </li>
              <li>
                <a
                  href="https://wundr.space"
                  className="text-neutral-600 hover:text-neutral-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  wundr.space
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-200 text-center text-sm text-neutral-600 space-y-1">
          <p>© 2025 Wundr Space Ltd. All rights reserved.</p>
          <p>Registered in England & Wales under 15698755</p>
        </div>
      </div>
    </footer>
  );
}
