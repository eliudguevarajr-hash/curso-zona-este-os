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
  { label: "Contactar", href: "/ayuda" },
];

export const announcements: Announcement[] = [
  {
    title: "Etapa abierta actualmente",
    detail: "En este momento solo debes completar tu registro y subir tus documentos correspondientes.",
    tone: "warning",
  },
  {
    title: "Sigue el proceso en orden",
    detail: "Primero regístrate. Después sube tus documentos. Las siguientes fases se publicarán más adelante.",
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
    description: "Úsalo solo como referencia general del curso después de completar tu proceso.",
    href: "/calendario",
    status: "available",
  },
  {
    title: "Contactar Zona Este",
    description: "Accede a los contactos y respuestas rápidas si tienes dudas.",
    href: "/ayuda",
    status: "available",
  },
];

export const footerLinks: NavItem[] = [...navigation];
