import { contact } from "./site";

export const contactChannels = [
  {
    label: "Teléfono 24h",
    title: contact.phone.label,
    description: "La vía más rápida para averías, retirada o asistencia urgente.",
    href: contact.phone.href,
    icon: "phone"
  },
  {
    label: "Zona de servicio",
    title: contact.area,
    description: "Cobertura local para asistencia en carretera y traslados.",
    icon: "map-pin"
  },
  {
    label: "Horario",
    title: contact.hours,
    description: contact.response,
    icon: "clock"
  }
];

export const emergencySteps = [
  "Indica tu ubicación o punto kilométrico si estás en carretera.",
  "Cuéntanos qué vehículo tienes y qué incidencia se ha producido.",
  "Confirma si necesitas asistencia in situ, retirada o traslado a taller."
];
