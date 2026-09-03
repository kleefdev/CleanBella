import { Calendar, Clock, Phone } from 'lucide-react';

export const BookingCalendar = () => {
  return (
    <div className="bg-brand-forest text-brand-cream p-10 md:p-12 relative overflow-hidden h-full">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl -mr-16 -mt-16" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-10">
          <h2 className="text-4xl font-serif mb-4">Agenda una llamada</h2>
          <p className="text-brand-cream/70">¿Prefieres hablar directamente con nosotros? Elige el día y horario que mejor te convenga para una consulta personalizada.</p>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center bg-white/5 border border-brand-gold/20 p-8 text-center backdrop-blur-sm">
          <div className="w-16 h-16 bg-brand-gold/20 flex items-center justify-center rounded-full mb-6">
            <Calendar className="w-8 h-8 text-brand-gold" />
          </div>
          <h4 className="text-2xl font-serif mb-2">Calendario de Citas</h4>
          <p className="text-brand-cream/60 mb-8 max-w-xs mx-auto">Selecciona una fecha disponible para que un coordinador de CleanBella te llame.</p>
          
          <div className="w-full space-y-3 mb-10">
             <div className="flex items-center gap-4 p-4 border border-brand-gold/10 bg-brand-forest/40 hover:bg-brand-forest/60 transition-colors cursor-pointer group">
               <Clock className="w-5 h-5 text-brand-gold" />
               <span className="text-sm font-medium">Lunes a Viernes: 9:00 AM - 6:00 PM</span>
             </div>
             <div className="flex items-center gap-4 p-4 border border-brand-gold/10 bg-brand-forest/40 hover:bg-brand-forest/60 transition-colors cursor-pointer group">
               <Phone className="w-5 h-5 text-brand-gold" />
               <span className="text-sm font-medium">Asesoría telefónica gratuita</span>
             </div>
          </div>

          <button className="btn-primary !bg-brand-gold !text-brand-forest w-full hover:!bg-white">
            Abrir Calendario
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-brand-gold/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-bold">Disponible ahora</span>
          </div>
        </div>
      </div>
    </div>
  );
};
