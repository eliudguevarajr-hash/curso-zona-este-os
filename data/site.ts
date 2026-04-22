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
  { label: "Diagnósticos", href: "/inscripcion" },
  { label: "Contactar", href: "/ayuda" },
];

export const announcements: Announcement[] = [
  {
    title: "Etapa abierta actualmente",
    detail: "Cada estudiante debe completar los 3 diagnósticos esta semana de manera individual.",
    tone: "warning",
  },
  {
    title: "Último paso después de los formularios",
    detail: "Una vez que completes los 3 diagnósticos, nuestro equipo te contactará para realizar la entrevista formal.",
    tone: "info",
  },
];

export const quickLinks: QuickLink[] = [
  {
    title: "Convocatoria PDF",
    description: "Consulta la convocatoria oficial si necesitas revisar los detalles del proceso.",
    ...managedLinks.convocatoriaPdf,
  },
  {
    title: "Calendario General",
    description: "Úsalo solo como referencia general del curso mientras completas tus diagnósticos.",
    href: "/calendario",
    status: "available",
  },
  {
    title: "Contactar Zona Este",
    description: "Accede a los contactos y respuestas rápidas si tienes dudas sobre los diagnósticos.",
    href: "/ayuda",
    status: "available",
  },
];

export const footerLinks: NavItem[] = [...navigation];
