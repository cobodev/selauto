type IconKey = 'badge' | 'map' | 'shield' | 'truck';

interface Pillar {
  title: string;
  description: string;
  icon: IconKey;
}

export const aboutPillars: Pillar[] = [
  {
    title: "Empresa local",
    description:
      "Conocemos de cerca las carreteras, accesos, pueblos y zonas de montaña en las que trabajamos cada día.",
    icon: "map"
  },
  {
    title: "Más de 25 años",
    description:
      "La experiencia en carretera nos ayuda a valorar cada aviso con rapidez y a coordinar la asistencia adecuada.",
    icon: "badge"
  },
  {
    title: "Aseguradoras",
    description:
      "Trabajamos con las principales compañías de asistencia para dar una respuesta clara, ordenada y profesional.",
    icon: "shield"
  },
  {
    title: "Flota preparada",
    description:
      "Contamos con grúas todoterreno, plataformas, portavehículos y coches taller para distintos tipos de incidencia.",
    icon: "truck"
  }
];

export const aboutTimeline = [
  {
    label: "Origen local",
    text: "Selauto nace como servicio cercano para conductores, talleres y compañías de asistencia en Cantabria."
  },
  {
    label: "Respuesta en carretera",
    text: "El trabajo diario combina urgencias, traslados programados, retirada de vehículos y apoyo técnico en ruta."
  },
  {
    label: "Servicio actual",
    text: "Hoy mantenemos una flota propia y flexible, preparada para intervenir en valle, autovía, ciudad o accesos complicados."
  }
];

export const aboutValues = ["Rapidez", "Trato directo", "Criterio local", "Flota propia", "Servicio 24h", "Coordinación con compañías"];
