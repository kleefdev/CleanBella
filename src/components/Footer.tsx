import { SITE_CONFIG } from '../config/site';
import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-forest text-brand-cream border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-8">
            <img
              src={SITE_CONFIG.logos.emblem}
              alt="CleanBella Emblem"
              className="h-28 w-auto object-contain drop-shadow-md"
            />
            <p className="text-brand-cream/60 leading-relaxed max-w-xs">
              Servicios profesionales de limpieza en Tampico, Tamaulipas. Un espacio impecable comienza con el detalle que solo nosotros brindamos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-brand-forest transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-brand-forest transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="text-xl font-serif text-brand-gold mb-8">Navegación</h4>
            <ul className="space-y-4">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-brand-cream/60 hover:text-brand-gold transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 bg-brand-gold scale-0 group-hover:scale-100 transition-transform" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-xl font-serif text-brand-gold mb-8">Servicios</h4>
            <ul className="space-y-4">
              {SITE_CONFIG.services.map((service) => (
                <li key={service.id}>
                  <a href="#servicios" className="text-brand-cream/60 hover:text-brand-gold transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 bg-brand-gold scale-0 group-hover:scale-100 transition-transform" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xl font-serif text-brand-gold mb-8">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-gold shrink-0" />
                <span className="text-brand-cream/60 text-sm leading-relaxed">
                  Tampico, Tamaulipas, México. <br /> Zona Metropolitana.
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-brand-gold shrink-0" />
                <span className="text-brand-cream/60 text-sm font-medium">{SITE_CONFIG.contact.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-brand-gold shrink-0" />
                <span className="text-brand-cream/60 text-sm">{SITE_CONFIG.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-brand-cream/40 text-xs tracking-widest uppercase">
            © {new Array(1).fill(new Date().getFullYear())} CleanBella. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-brand-cream/40 text-xs tracking-widest uppercase hover:text-brand-gold transition-colors">Aviso de Privacidad</a>
            <a href="#" className="text-brand-cream/40 text-xs tracking-widest uppercase hover:text-brand-gold transition-colors">Términos y Condiciones</a>
          </div>
          <p className="text-brand-gold/40 text-xs font-bold tracking-[0.2em]">soscleanbella.mx</p>
        </div>
      </div>
    </footer>
  );
};
