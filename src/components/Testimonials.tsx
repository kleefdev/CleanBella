import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: "María Fernández",
      role: "Residente en Lomas del Chairel",
      text: "El nivel de detalle es impresionante. He probado otros servicios en Tampico pero ninguno con la puntualidad y el cuidado que ofrece CleanBella. Mi casa huele increíble.",
      rating: 5
    },
    {
      name: "Ing. Ricardo Treviño",
      role: "Administrador de Oficinas",
      text: "Contratamos el servicio para nuestras oficinas y el cambio fue inmediato. Un ambiente limpio y profesional que motiva a todo el equipo. Totalmente recomendados.",
      rating: 5
    },
    {
      name: "Sofía Villarreal",
      role: "Host de Airbnb",
      text: "Como anfitriona, la limpieza es mi mayor prioridad. CleanBella nunca me ha fallado. Mis huéspedes siempre comentan lo impecable que está el departamento.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-forest mb-4">Lo que dicen <br /><span className="italic">nuestros clientes.</span></h2>
            <p className="text-brand-charcoal/70">La satisfacción de quienes confían en nosotros es nuestra mejor carta de presentación.</p>
          </div>
          <div className="flex items-center gap-2 text-brand-gold">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-bold text-sm tracking-widest uppercase">Excelente Servicio</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 relative border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-gold/5" />
              <div className="flex mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-brand-gold fill-current" />)}
              </div>
              <p className="text-brand-charcoal/80 mb-8 italic leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-serif text-xl text-brand-forest">{review.name}</h4>
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
