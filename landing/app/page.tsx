import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Mediate } from './components/Mediate';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { UniversalAccess } from './components/UniversalAccess';
import { WhyGitHub } from './components/WhyGitHub';
import { BeyondCoding } from './components/BeyondCoding';
import { Features } from './components/Features';
import { Roadmap } from './components/Roadmap';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Mediate />
        <Solution />
        <HowItWorks />
        <UniversalAccess />
        <WhyGitHub />
        <BeyondCoding />
        <Features />
        <Roadmap />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
