import { serviceDetails } from "./services";

export const phone = {
  label: "+34 600 123 456",
  href: "tel:+34600123456"
};

export const contact = {
  phone,
  address: "Autovía A8, salida 214, nave 1, 39650 La Penilla De Cayón, Cantabria",
  area: "Valles Pasiegos y Cantabria",
  hours: "Atención 24 horas, todos los días",
  response: "Asistencia urgente y avisos programados",
  location: {
    lat: 43.313765,
    lng: -3.878979
  },
  coverageRadiusKm: 35
};

export const siteMetadata = {
  title: "Grúas Selauto | Grúa 24h en Cantabria",
  description:
    "Grúas Selauto ofrece asistencia en carretera y grúa 24h en Cantabria. Servicio local y rápido."
};

export const navItems = [
  { label: "Servicios", href: "/servicios" },
  { label: "Flota", href: "/flota" },
  { label: "Aseguradoras", href: "/aseguradoras" },
  { label: "Contacto", href: "/contacto" }
];

export const features = [
  { label: "24 / 7" },
  { label: "Cobertura local" },
  { label: "Seguros y compañías" },
  { label: "Flota propia" }
];

export const services = serviceDetails.map(({ title, icon, description }) => ({ title, icon, description }));

export const stats = [
  { value: "25+", label: "Años de experiencia" },
  { value: "24h", label: "Servicio continuo" },
  { value: "100%", label: "Flota propia" },
  { value: "5★", label: "Valoración media" }
];

export const coverageZones = {
  primary: {
    title: "Valles Pasiegos",
    label: "Zona principal",
    description:
      "Asistencia cercana en carreteras de valle, puertos, pueblos y accesos de montaña. Conocimiento local para llegar con criterio."
  },
  places: ["Selaya", "Sarón", "Torrelavega", "Liérganes", "Villacarriedo", "Puente Viesgo", "Santa María de Cayón", "Santander"]
};
