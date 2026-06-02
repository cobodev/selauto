import { homeServiceDetails } from "./services";

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
    "Grúas Selauto ofrece auxilio, asistencia en carretera y grúa 24h en Cantabria desde 1980."
};

export const navItems = [
  { label: "Servicios", href: "/servicios" },
  { label: "Flota", href: "/flota" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" }
];

export const features = [
  { label: "24 / 7" },
  { label: "Desde 1980" },
  { label: "Seguros y compañías" },
  { label: "Flota propia" }
];

export const services = homeServiceDetails.map(({ title, icon, description, featured }) => ({ title, icon, description, featured }));

export const stats = [
  { value: "40+", label: "Años de experiencia" },
  { value: "24h", label: "Servicio continuo" },
  { value: "365", label: "Todos los días del año" },
  { value: "1980", label: "Inicio de actividad" }
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
