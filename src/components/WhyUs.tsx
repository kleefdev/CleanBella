import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, HeartHandshake, Zap, ShieldCheck, Microscope, Headphones } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const WhyUs = () => {
  const benefits = [
    {
      title: "Atención al detalle",
      description: "No solo limpiamos, perfeccionamos cada superficie y rincón.",
      icon: Microscope,
    },
    {
      title: "Personal profesional",
      description: "Equipo capacitado, confiable y con una actitud de servicio excepcional.",
      icon: Users,
    },
    {
      title: "Puntualidad",
      description: "Respetamos tu agenda. Llegamos a tiempo, siempre.",
      icon: Zap,
    },
    {
      title: "Confianza",
      description: "Tu seguridad es prioridad. Procesos de selección rigurosos.",
      icon: ShieldCheck,
    },
    {
      title: "Servicio personalizado",
      description: "Entendemos que cada espacio tiene necesidades únicas.",
      icon: HeartHandshake,
    },
    {
      title: "Calidad constante",
      description: "Mantenemos el mismo estándar de excelencia en cada visita.",
      icon: Award,
    },
    {
      title: "Atención cercana",
      description: "Comunicación fluida y directa a través de WhatsApp.",
      icon: Headphones,
    },
    {
      title: "Cotización sencilla",
      description: "Recibe un presupuesto claro y sin compromisos en minutos.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="section-padding bg-brand-forest text-brand-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-brand-gold/10 -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-brand-gold/10 -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                Más que limpiar, cuidamos cada detalle <span className="text-brand-gold">para tu tranquilidad.</span>
              </h2>
              <p className="text-brand-cream/70 text-lg mb-8 leading-relaxed">
                En CleanBella entendemos que tu espacio es sagrado. Por eso, hemos diseñado un sistema de limpieza que combina técnicas profesionales con una calidez humana que marca la diferencia en Tampico.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-brand-gold mb-8">
                  <div className="h-px w-12 bg-brand-gold" />
                  <span className="uppercase tracking-[0.3em] text-xs font-bold">Por qué elegirnos</span>
                </div>
                <div className="pt-2">
                  <img 
                    src={SITE_CONFIG.logos.extended} 
                    alt="CleanBella Servicios Profesionales de Limpieza" 
                    className="h-40 sm:h-48 md:h-56 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-brand-gold/10 border border-brand-gold/30 text-brand-gold">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2 text-white">{benefit.title}</h3>
                  <p className="text-brand-cream/60 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
