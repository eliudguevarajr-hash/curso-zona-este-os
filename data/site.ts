import { managedLinks } from "./links";

export type NavItem = {
  label: string;
  href: string;
};

export type Announcement = {
  title: string;
  detail: string;
  tone?: "warning" | "info";
};

export type QuickLink = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  status?: "available" | "pending";
  note?: string;
};

export const siteMeta = {
  title: "Departamento Educativo - Zona Este",
  subtitle: "Convocatoria / Curso de Capacitación Ministerial 2026",
  description:
    "Portal oficial de información, orientación y seguimiento para la Convocatoria y Curso de Capacitación Ministerial 2026 de la Zona Este.",
};

export const navigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Inscripción", href: "/inscripcion" },
  { label: "Calendario", href: "/calendario" },
  { label: "Classroom", href: "/classroom" },
  { label: "Ayuda", href: "/ayuda" },
];

export const colorPalette = [
  { name: "Marfil", hex: "#f8f6f1" },
  { name: "Papel", hex: "#fffdf9" },
  { name: "Niebla", hex: "#eef3f7" },
  { name: "Arena Suave", hex: "#e7dfd2" },
  { name: "Azul Base", hex: "#3f6f94" },
  { name: "Azul Institucional", hex: "#284860" },
  { name: "Azul Profundo", hex: "#11202a" },
  { name: "Dorado Suave", hex: "#c59a57" },
  { name: "Salvia", hex: "#5d7555" },
];

export const announcements: Announcement[] = [
  {
    title: "Convocatoria abierta del 05 al 28 de marzo de 2026",
    detail: "No hay prórroga. El curso inicia el 03 de mayo de 2026.",
    tone: "warning",
  },
  {
    title: "Este sitio es el centro oficial de información",
    detail:
      "Google Classroom seguirá siendo la plataforma para tareas, entregas y actividad académica.",
    tone: "info",
  },
];

export const quickLinks: QuickLink[] = [
  {
    title: "Registro en línea",
    description: "Completa tu preinscripción mediante el formulario oficial cuando sea publicado.",
    ...managedLinks.registrationForm,
  },
  {
    title: "Google Classroom",
    description: "Consulta clases, tareas, avisos y entregas de cada materia.",
    ...managedLinks.classroomAccess,
  },
  {
    title: "Zoom",
    description: "Accede a reuniones informativas y sesiones en vivo cuando se publiquen los enlaces.",
    ...managedLinks.orientationZoom,
  },
  {
    title: "Recursos",
    description: "Encuentra formatos, documentos y carpetas de apoyo.",
    href: "/recursos",
    status: "available",
  },
  {
    title: "Documentos",
    description: "Revisa el listado oficial de documentos para matriculación.",
    href: "/inscripcion#documentos",
    status: "available",
  },
  {
    title: "Contacto Zona Este",
    description: "Solicita orientación directa al equipo responsable.",
    href: "/ayuda",
    status: "available",
  },
];

export const footerLinks: NavItem[] = [
  { label: "Convocatoria", href: "/convocatoria" },
  { label: "Inscripción", href: "/inscripcion" },
  { label: "Calendario", href: "/calendario" },
  { label: "Materias", href: "/materias" },
  { label: "Classroom", href: "/classroom" },
  { label: "Recursos", href: "/recursos" },
  { label: "Reuniones", href: "/reuniones" },
  { label: "Ayuda", href: "/ayuda" },
  { label: "FAQ", href: "/faq" },
];
