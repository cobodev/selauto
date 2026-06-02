export const serviceDetails = [
  {
    title: "Asistencia 24h",
    icon: "clock",
    description: "Auxilio urgente en carretera durante el día y la noche, todos los días del año.",
    detail:
      "Atendemos avisos urgentes para valorar la incidencia, enviar el recurso adecuado y ayudarte a resolver la situación con rapidez.",
    highlights: ["Disponible 24/365", "Respuesta urgente", "Coordinación desde el primer aviso"],
    featured: true,
    home: true
  },
  {
    title: "Transporte de vehículos",
    icon: "route",
    description: "Traslado de turismos y vehículos ligeros entre talleres, domicilios, ITV o puntos de entrega.",
    detail:
      "Gestionamos transportes urgentes o programados con coordinación de origen, destino y condiciones del vehículo.",
    highlights: ["Talleres y domicilios", "ITV y entregas", "Traslados planificados"],
    featured: true,
    home: true
  },
  {
    title: "Rescates 4x4",
    icon: "mountain",
    description: "Intervención en zonas complicadas, accesos difíciles o vehículos fuera de la vía.",
    detail:
      "Valoramos el terreno y la posición del vehículo para realizar una retirada segura y adaptada a cada situación.",
    highlights: ["Accesos difíciles", "Vehículos bloqueados", "Retirada segura"],
    featured: true,
    home: true
  },
  {
    title: "Arranque de baterías",
    icon: "battery-charging",
    description: "Asistencia por fallo de batería para intentar recuperar la movilidad del vehículo.",
    detail:
      "Comprobamos la incidencia y realizamos arranque asistido cuando sea posible, o coordinamos el traslado si el vehículo no responde.",
    highlights: ["Arranque asistido", "Fallo de batería", "Solución en ruta"],
    home: true
  },
  {
    title: "Cambio de ruedas",
    icon: "disc",
    description: "Ayuda con pinchazos, neumáticos dañados o incidencias que impiden continuar la marcha.",
    detail:
      "Prestamos asistencia para recuperar la movilidad o trasladar el vehículo si el estado de la rueda no permite circular con seguridad.",
    highlights: ["Pinchazos", "Ruedas dañadas", "Continuidad del viaje"],
    home: true
  },
  {
    title: "Vehículos averiados",
    icon: "wrench",
    description: "Apoyo ante averías en carretera, inmovilizaciones o incidencias mecánicas inesperadas.",
    detail:
      "Revisamos la situación inicial y coordinamos asistencia, retirada o traslado según el estado del vehículo.",
    highlights: ["Averías en ruta", "Diagnóstico inicial", "Traslado si procede"]
  },
  {
    title: "Suministro de combustible",
    icon: "fuel",
    description: "Asistencia cuando el vehículo se queda sin combustible y no puede continuar.",
    detail:
      "Ayudamos a resolver la incidencia de forma segura y coordinamos la alternativa adecuada según la ubicación del vehículo.",
    highlights: ["Falta de combustible", "Ayuda en carretera", "Actuación segura"]
  },
  {
    title: "Apertura de vehículos",
    icon: "key-round",
    description: "Ayuda ante llaves dentro del vehículo o problemas de acceso al habitáculo.",
    detail:
      "Intervenimos con cuidado para facilitar el acceso cuando la situación lo permite y orientar la solución más segura.",
    highlights: ["Llaves dentro", "Acceso al vehículo", "Atención cuidadosa"]
  },
  {
    title: "Transporte de motos",
    icon: "bike",
    description: "Traslado de motocicletas con coordinación de origen y destino.",
    detail:
      "Transportamos motos para particulares, talleres o incidencias en ruta, cuidando la carga y el traslado.",
    highlights: ["Motos averiadas", "Talleres y domicilios", "Traslado coordinado"]
  },
  {
    title: "Atención 24/7",
    icon: "phone-call",
    description: "Canal de atención continuo para recibir avisos, resolver dudas y coordinar asistencias.",
    detail:
      "Estamos disponibles para escuchar la incidencia, confirmar ubicación y activar la ayuda necesaria en cada caso.",
    highlights: ["Avisos urgentes", "Atención permanente", "Coordinación rápida"],
    featured: true,
  },
  {
    title: "Bajas de vehículos",
    icon: "file-minus",
    description: "Bajas de vehículos y trámites administrativos.",
    detail:
      "Gestionamos bajas de vehículos para particulares, empresas o talleres, facilitando los trámites necesarios.",
    highlights: ["Bajas de vehículos", "Trámites administrativos", "Gestión integral"],
    featured: true,
  }
];

export const homeServiceDetails = serviceDetails.filter((service) => service.home);
