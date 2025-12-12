export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-8">
          <a
            href="https://wundr.space"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            ← Wundr Space
          </a>
          <span className="font-semibold text-neutral-900">
            Portable Context Framework
          </span>
        </div>
        <a
          href="#waitlist"
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Join Waitlist
        </a>
      </nav>
    </header>
  );
}
