import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-forest mb-4">Preguntas Frecuentes</h2>
          <p className="text-brand-charcoal/60">Resolvemos tus dudas para que puedas agendar con total confianza.</p>
        </div>

        <div className="space-y-4">
          {SITE_CONFIG.faq.map((item, index) => (
            <div key={index} className="border-b border-brand-gold/20">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-serif transition-colors ${openIndex === index ? 'text-brand-gold' : 'text-brand-forest group-hover:text-brand-gold'}`}>
                  {item.question}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-brand-gold" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-brand-charcoal/70 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
