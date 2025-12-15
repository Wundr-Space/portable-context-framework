import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Waitlist } from '../components/Waitlist';
import { DevHero } from './components/DevHero';
import { DevProblem } from './components/DevProblem';
import { DevMediate } from './components/DevMediate';
import { DevFeatures } from './components/DevFeatures';
import { DevPrinciples } from './components/DevPrinciples';
import { DevScenario } from './components/DevScenario';

export default function DevEditionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <DevHero />
        <DevProblem />
        <DevMediate />
        <DevFeatures />
        <DevPrinciples />
        <DevScenario />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
