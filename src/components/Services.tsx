import { motion } from 'motion/react';
import { Home, Sparkles, Briefcase, Store, Key, PartyPopper, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const Services = () => {
  const iconMap = {
    Home,
    Sparkles,
    Briefcase,
    Store,
    Key,
    PartyPopper,
  };

  const images = [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section className="section-padding bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-forest mb-4">
              Servicios pensados para cada espacio
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-6" />
            <p className="text-brand-charcoal/70 max-w-2xl mx-auto">
              Ofrecemos soluciones de limpieza premium adaptadas a la exigencia de tu hogar, negocio o propiedad.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden"
              >
                {/* Image overlay style */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={images[index]} 
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-forest/20 group-hover:bg-transparent transition-all duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-cream p-3 shadow-lg">
                    {Icon && <Icon className="w-6 h-6 text-brand-gold" />}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-serif text-brand-forest mb-3 group-hover:text-brand-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-brand-charcoal/70 mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <a 
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-gold hover:text-brand-forest transition-colors"
                  >
                    <span>Solicitar cotización</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
