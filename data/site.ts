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
  title: "Departamento Educativo: Zona Este",
  subtitle: "Convocatoria / Curso de Capacitación Ministerial 2026",
  description:
    "Portal oficial de información, orientación y seguimiento para la Convocatoria y Curso de Capacitación Ministerial 2026 de la Zona Este.",
};

export const navigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Inscripción", href: "/inscripcion" },
  { label: "Calendario", href: "/calendario" },
  { label: "Ayuda", href: "/ayuda" },
];

export const announcements: Announcement[] = [
  {
    title: "Convocatoria abierta para Zona Este",
    detail: "El curso inicia el 03 de Mayo de 2026. Mantente atento a cualquier actualización de inscripción.",
    tone: "warning",
  },
  {
    title: "Este sitio es el centro oficial de información",
    detail: "Por ahora este sitio está concentrado en la etapa de inscripción y registro inicial.",
    tone: "info",
  },
];

export const quickLinks: QuickLink[] = [
  {
    title: "Registro inicial",
    description: "Formulario oficial para comenzar el proceso de Aspirante, Obrero Laico o Ayuda.",
    ...managedLinks.registrationForm,
  },
  {
    title: "Convocatoria PDF",
    description: "Convocatoria oficial del curso 2026.",
    ...managedLinks.convocatoriaPdf,
  },
  {
    title: "Calendario",
    description: "Consulta las fechas principales del proceso y del curso.",
    href: "/calendario",
    status: "available",
  },
  {
    title: "Ayuda Zona Este",
    description: "Accede a los contactos y respuestas rápidas si tienes dudas.",
    href: "/ayuda",
    status: "available",
  },
];

export const footerLinks: NavItem[] = [...navigation];
