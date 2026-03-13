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
];

export const announcements: Announcement[] = [
  {
    title: "Convocatoria abierta del 05 al 28 de marzo de 2026",
    detail: "No hay prórroga. El curso inicia el 03 de mayo de 2026.",
    tone: "warning",
  },
  {
    title: "Este sitio es el centro oficial de información",
    detail: "Google Classroom sigue siendo la plataforma para tareas, entregas y actividad académica.",
    tone: "info",
  },
];

export const quickLinks: QuickLink[] = [
  {
    title: "Registro de Aspirante",
    description: "Formulario oficial para comenzar el proceso.",
    ...managedLinks.registrationForm,
  },
  {
    title: "Solicitud de Inscripción",
    description: "Formato oficial para firma del Encargado de Localidad.",
    ...managedLinks.inscriptionRequestPdf,
  },
  {
    title: "Convocatoria PDF",
    description: "Convocatoria oficial del curso 2026.",
    ...managedLinks.convocatoriaPdf,
  },
  {
    title: "Google Classroom",
    description: "Acceso general a clases, tareas y avisos.",
    ...managedLinks.classroomAccess,
  },
  {
    title: "Carpeta de Recursos",
    description: "Carpeta general de materiales y documentos.",
    ...managedLinks.generalDrive,
  },
];

export const footerLinks: NavItem[] = [...navigation];
