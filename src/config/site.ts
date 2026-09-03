export const SITE_CONFIG = {
  name: "CleanBella",
  domain: "soscleanbella.mx",
  location: "Tampico, Tamaulipas, México",
  contact: {
    whatsapp: "+52 833 302 7582",
    whatsappMessage: "Hola CleanBella, me gustaría solicitar información y una cotización para un servicio de limpieza.",
    phone: "+52 833 302 7582",
    email: "hola@soscleanbella.mx",
  },
  bookingUrl: "#", // Placeholder for calendar
  logos: {
    emblem: "/assets/CleanBellaLogoEmblem.png",
    primary: "/assets/CleanBellaLogo.png",
    extended: "/assets/CleanBellaLogoExtended.png",
    original: "/assets/CleanBellaLogo - Provided by the owner.jpg",
    originalExtended: "/assets/CleanBellaLogo Extended - Provided by the owner.jpg",
  },
  navigation: [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "¿Por qué CleanBella?", href: "#porque-nosotros" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ],
  services: [
    {
      id: "residencial",
      name: "Limpieza residencial",
      description: "Atención meticulosa para que tu hogar siempre sea un refugio impecable.",
      icon: "Home",
    },
    {
      id: "profunda",
      name: "Limpieza profunda",
      description: "Un servicio detallado que llega a cada rincón, ideal para renovar tus espacios.",
      icon: "Sparkles",
    },
    {
      id: "oficinas",
      name: "Limpieza de oficinas",
      description: "Entornos de trabajo limpios que fomentan la productividad y profesionalismo.",
      icon: "Briefcase",
    },
    {
      id: "comercial",
      name: "Limpieza comercial",
      description: "Mantén tu negocio reluciente para recibir a tus clientes con la mejor impresión.",
      icon: "Store",
    },
    {
      id: "airbnb",
      name: "Limpieza para Airbnb",
      description: "Servicio rápido y eficiente para que tus huéspedes siempre encuentren un 10/10.",
      icon: "Key",
    },
    {
      id: "eventos",
      name: "Después de eventos",
      description: "Tú disfruta la fiesta, nosotros nos encargamos de que todo vuelva al orden.",
      icon: "PartyPopper",
    },
  ],
  promises: [
    { name: "CONFIABLES", description: "Personal verificado y comprometido." },
    { name: "DETALLISTAS", description: "Cuidamos lo que otros pasan por alto." },
    { name: "PUNTUALES", description: "Respetamos tu tiempo como el nuestro." },
  ],
  faq: [
    {
      question: "¿Qué servicios de limpieza ofrecen?",
      answer: "Ofrecemos una amplia gama de servicios que incluyen limpieza residencial, profunda, de oficinas, comercial, para Airbnb y después de eventos. Cada servicio es personalizado según tus necesidades."
    },
    {
      question: "¿En qué zonas trabajan?",
      answer: "Atendemos en Tampico, Madero y Altamira. Si te encuentras cerca de la zona metropolitana, contáctanos para verificar disponibilidad."
    },
    {
      question: "¿Cómo puedo solicitar una cotización?",
      answer: "Es muy sencillo. Puedes enviarnos un mensaje por WhatsApp, llamarnos directamente o completar el formulario en nuestro sitio web. Te responderemos a la brevedad."
    },
    {
      question: "¿Puedo contratar limpieza recurrente?",
      answer: "Sí, contamos con planes semanales, quincenales o mensuales que se adaptan a tu ritmo de vida o necesidades de negocio."
    },
    {
      question: "¿Cómo se agenda un servicio?",
      answer: "Una vez aceptada la cotización, acordamos el día y la hora. Puedes agendar directamente por WhatsApp o mediante nuestra herramienta de reserva en línea."
    }
  ]
};
