import { WaitlistForm } from './WaitlistForm';

export function Waitlist() {
  return (
    <section id="waitlist" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            Get Early Access
          </h2>
          <p className="text-xl text-neutral-600">
            Be among the first to experience AI coding with perfect memory.
          </p>
        </div>

        <WaitlistForm />
      </div>
    </section>
  );
}
