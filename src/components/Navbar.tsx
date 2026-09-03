import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img 
            src={SITE_CONFIG.logos.emblem} 
            alt="CleanBella Logo" 
            className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-14 sm:h-16'} w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform`}
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-forest group-hover:text-brand-gold transition-colors leading-none">
              CleanBella
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-semibold mt-1">
              Limpieza Profesional
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {SITE_CONFIG.navigation.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-brand-charcoal hover:text-brand-gold font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {item.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Cotiza por WhatsApp</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-forest"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-cream border-b border-brand-gold/20 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6">
              {SITE_CONFIG.navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-serif text-brand-charcoal hover:text-brand-gold"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Cotiza por WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
