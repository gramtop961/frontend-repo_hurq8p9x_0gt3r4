import Hero from './components/Hero';
import Topics from './components/Topics';
import Testimonials from './components/Testimonials';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Hero />
      <Topics />
      <Testimonials />
      <SiteFooter />
    </div>
  );
}

export default App;
