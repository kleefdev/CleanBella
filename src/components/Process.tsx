import { motion } from 'motion/react';

export const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Cuéntanos qué necesitas",
      desc: "Contáctanos por WhatsApp o formulario detallando tu espacio."
    },
    {
      num: "02",
      title: "Recibe tu cotización",
      desc: "Te enviamos una propuesta personalizada de inmediato."
    },
    {
      num: "03",
      title: "Agendamos tu servicio",
      desc: "Eliges el día y la hora que mejor te convenga."
    },
    {
      num: "04",
      title: "Disfruta un espacio impecable",
      desc: "Nuestro equipo se encarga de todo. Relájate y disfruta."
    }
  ];

  return (
    <section className="section-padding bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-forest mb-4">
            Tu camino hacia la limpieza total
          </h2>
          <p className="text-brand-charcoal/60 uppercase tracking-widest text-sm">Tan fácil como enviar un mensaje</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 bg-white border-b-4 border-brand-gold shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="absolute -top-6 left-8 text-6xl font-serif text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors pointer-events-none">
                {step.num}
              </div>
              <div className="relative z-10">
                <span className="text-brand-gold font-bold text-sm tracking-tighter mb-4 block">{step.num}</span>
                <h3 className="text-xl font-serif text-brand-forest mb-4 leading-snug">{step.title}</h3>
                <p className="text-brand-charcoal/70 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
