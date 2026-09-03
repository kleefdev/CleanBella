import { motion } from 'motion/react';
import { MessageCircle, Calendar } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600" 
          alt="Luxury living room" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-cream/70 md:bg-brand-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Servicio profesional en Tampico, Tamaulipas
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-forest leading-[1.1] mb-6">
              Tu espacio impecable. <br />
              <span className="italic font-normal">La tranquilidad de dejarlo en nuestras manos.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/80 mb-10 leading-relaxed">
              Servicios profesionales de limpieza en Tampico, con atención al detalle, puntualidad y la confianza que tu hogar o negocio merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-3 text-lg group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Hablar por WhatsApp</span>
              </a>
              <a 
                href="#contacto"
                className="btn-outline flex items-center justify-center gap-3 text-lg group"
              >
                <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Agendar una llamada</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex items-center gap-8 border-t border-brand-gold/20 pt-8"
          >
            <div className="flex flex-col">
              <span className="text-brand-forest font-serif text-2xl">100%</span>
              <span className="text-xs uppercase tracking-widest text-brand-gold">Confiables</span>
            </div>
            <div className="w-px h-10 bg-brand-gold/20" />
            <div className="flex flex-col">
              <span className="text-brand-forest font-serif text-2xl">Detalle</span>
              <span className="text-xs uppercase tracking-widest text-brand-gold">Meticuloso</span>
            </div>
            <div className="w-px h-10 bg-brand-gold/20" />
            <div className="flex flex-col">
              <span className="text-brand-forest font-serif text-2xl">Premium</span>
              <span className="text-xs uppercase tracking-widest text-brand-gold">Garantizado</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Visual Accent */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="hidden lg:block absolute right-[-5%] top-[20%] w-[40%] h-[60%] z-10"
      >
        <div className="relative w-full h-full border-[12px] border-brand-gold/10 p-6">
          <img 
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=800" 
            alt="Detalle de limpieza profesional" 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -left-10 bg-brand-forest/95 border border-brand-gold/30 p-6 shadow-2xl backdrop-blur-sm">
             <img 
              src={SITE_CONFIG.logos.emblem} 
              alt="CleanBella Emblem" 
              className="h-20 w-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
