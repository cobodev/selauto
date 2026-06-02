type IconKey = 'badge' | 'map' | 'shield' | 'truck';

interface Pillar {
  title: string;
  description: string;
  icon: IconKey;
}

export const aboutPillars: Pillar[] = [
  {
    title: "Desde 1980",
    description:
      "Más de 40 años de experiencia en auxilio y asistencia en carretera nos permiten actuar con criterio en cada aviso.",
    icon: "badge"
  },
  {
    title: "Servicio 24/365",
    description:
      "Ofrecemos atención rápida, segura y profesional las 24 horas del día, todos los días del año.",
    icon: "shield"
  },
  {
    title: "Flota amplia",
    description:
      "Contamos con vehículos preparados para asistencia en carretera, transporte de vehículos y rescates.",
    icon: "truck"
  },
  {
    title: "Trato cualificado",
    description:
      "Nuestro equipo adapta cada intervención a las necesidades del cliente para ofrecer soluciones eficaces y de confianza.",
    icon: "map"
  }
];

export const aboutTimeline = [
  {
    label: "Trayectoria",
    text: "Desde 1980, Grúas Selauto trabaja como empresa especializada en auxilio y asistencia en carretera."
  },
  {
    label: "Intervención",
    text: "Coordinamos asistencia en carretera, transporte de vehículos y rescates con el recurso adecuado para cada situación."
  },
  {
    label: "Compromiso",
    text: "Garantizamos una atención eficaz y cercana, proporcionando soluciones inmediatas cuando más se necesitan."
  }
];

export const aboutValues = ["Rapidez", "Seguridad", "Profesionalidad", "Flota propia", "Servicio 24h", "Confianza"];
