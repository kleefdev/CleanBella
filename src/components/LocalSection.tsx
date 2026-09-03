import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export const LocalSection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-brand-forest opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-brand-forest text-brand-cream p-12 md:p-20 relative overflow-hidden">
          {/* Visual textures */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 transform skew-x-[-20deg] translate-x-20 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-brand-gold mb-6">
                <MapPin className="w-6 h-6" />
                <span className="uppercase tracking-[0.3em] font-bold text-sm">Orgullosamente Locales</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Profesionales de limpieza <br />
                <span className="italic">en Tampico y su zona metropolitana.</span>
              </h2>
              <p className="text-brand-cream/70 text-lg mb-10 leading-relaxed max-w-xl">
                Atendemos hogares, oficinas y negocios que buscan un servicio de limpieza profesional, puntual y detallista en Tampico, Ciudad Madero y Altamira.
              </p>
              <div className="flex flex-wrap gap-4 opacity-80">
                <span className="px-4 py-2 border border-brand-gold/30 text-xs font-bold tracking-widest uppercase">Tampico</span>
                <span className="px-4 py-2 border border-brand-gold/30 text-xs font-bold tracking-widest uppercase">Cd. Madero</span>
                <span className="px-4 py-2 border border-brand-gold/30 text-xs font-bold tracking-widest uppercase">Altamira</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video lg:aspect-square overflow-hidden border border-brand-gold/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1540339832862-47459980783f?auto=format&fit=crop&q=80&w=1000" 
                alt="Tampico view or clean space"
                className="w-full h-full object-cover grayscale-[0.2]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-center bg-brand-cream/10 backdrop-blur-md p-6 border border-white/10">
                <p className="font-serif italic text-xl">"La confianza de un servicio local con estándares internacionales."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
