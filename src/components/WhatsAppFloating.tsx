import { SITE_CONFIG } from '../config/site';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloating = () => {
  const waLink = `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappMessage)}`;

  return (
    <a 
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center gap-3"
      aria-label="Contactar por WhatsApp"
    >
      <div className="hidden group-hover:block overflow-hidden whitespace-nowrap px-2 font-bold text-sm tracking-tight">
        ¡Hablemos!
      </div>
      <MessageCircle className="w-8 h-8 fill-current" />
    </a>
  );
};
