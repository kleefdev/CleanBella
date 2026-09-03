import { Shield, Sparkles, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const TrustBar = () => {
  const icons = {
    CONFIABLES: Shield,
    DETALLISTAS: Sparkles,
    PUNTUALES: Clock,
  };

  return (
    <section className="bg-brand-forest text-brand-cream py-12 border-y border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          <div className="flex-1 text-center md:text-left">
            <p className="font-serif italic text-xl md:text-2xl text-brand-gold/80">
              "Porque una buena limpieza no solo se nota. Se siente."
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-12 md:gap-16">
            {SITE_CONFIG.promises.map((promise) => {
              const Icon = icons[promise.name as keyof typeof icons];
              return (
                <div key={promise.name} className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/50 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-forest transition-all duration-300">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <span className="text-sm font-bold tracking-[0.2em] uppercase">{promise.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
