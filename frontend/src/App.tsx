import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Details } from './sections/Details';
import { Outcomes } from './sections/Outcomes';
import { WhyJoin } from './sections/WhyJoin';
import { FAQ } from './sections/FAQ';
import { Registration } from './sections/Registration';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col relative">
      {/* Toast Notifications */}
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Landing Page Sections */}
      <main className="flex-grow">
        <Hero />
        <Details />
        <Outcomes />
        <WhyJoin />
        <FAQ />
        <Registration />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
