import { SITE_CONFIG } from './config/site';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { LocalSection } from './components/LocalSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { BookingCalendar } from './components/BookingCalendar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <TrustBar />
        <section id="servicios">
          <Services />
        </section>
        <section id="porque-nosotros">
          <WhyUs />
        </section>
        <Process />
        <LocalSection />
        <section id="nosotros">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contacto" className="bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 section-padding items-start">
            <ContactForm />
            <BookingCalendar />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
