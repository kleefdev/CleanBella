import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-cream p-12 text-center border border-brand-gold/20">
        <div className="w-20 h-20 bg-brand-forest text-brand-cream rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-serif text-brand-forest mb-4">¡Mensaje enviado!</h3>
        <p className="text-brand-charcoal/70 mb-8">Gracias por contactarnos. Un especialista de CleanBella se comunicará contigo muy pronto para brindarte tu cotización personalizada.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="btn-primary"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-4xl font-serif text-brand-forest mb-4">Cuéntanos qué necesitas</h2>
        <p className="text-brand-charcoal/70">Completa el formulario y recibe una cotización adaptada a tus requerimientos en menos de 24 horas.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-gold ml-1">Nombre Completo</label>
            <input 
              required
              type="text" 
              placeholder="Ej. Juan Pérez"
              className="w-full bg-brand-cream border border-brand-gold/20 px-4 py-3 focus:border-brand-gold outline-none transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-gold ml-1">WhatsApp / Teléfono</label>
            <input 
              required
              type="tel" 
              placeholder="Ej. 833 000 0000"
              className="w-full bg-brand-cream border border-brand-gold/20 px-4 py-3 focus:border-brand-gold outline-none transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-brand-gold ml-1">Correo Electrónico</label>
          <input 
            required
            type="email" 
            placeholder="correo@ejemplo.com"
            className="w-full bg-brand-cream border border-brand-gold/20 px-4 py-3 focus:border-brand-gold outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-gold ml-1">Tipo de Servicio</label>
            <select className="w-full bg-brand-cream border border-brand-gold/20 px-4 py-3 focus:border-brand-gold outline-none transition-colors appearance-none">
              <option>Residencial</option>
              <option>Profunda</option>
              <option>Oficinas</option>
              <option>Comercial</option>
              <option>Airbnb</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-gold ml-1">Frecuencia</label>
            <select className="w-full bg-brand-cream border border-brand-gold/20 px-4 py-3 focus:border-brand-gold outline-none transition-colors appearance-none">
              <option>Una sola vez</option>
              <option>Semanal</option>
              <option>Quincenal</option>
              <option>Mensual</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-brand-gold ml-1">Zona / Colonia en Tampico</label>
          <input 
            type="text" 
            placeholder="Ej. Lomas del Chairel"
            className="w-full bg-brand-cream border border-brand-gold/20 px-4 py-3 focus:border-brand-gold outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-brand-gold ml-1">Mensaje Adicional</label>
          <textarea 
            rows={4}
            placeholder="Cuéntanos más detalles sobre tu espacio..."
            className="w-full bg-brand-cream border border-brand-gold/20 px-4 py-3 focus:border-brand-gold outline-none transition-colors resize-none"
          ></textarea>
        </div>

        <button 
          disabled={status === 'sending'}
          type="submit" 
          className="btn-primary w-full flex items-center justify-center gap-3 py-4 disabled:opacity-70"
        >
          {status === 'sending' ? (
             <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span className="uppercase tracking-[0.2em] font-bold">Solicitar cotización</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
