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
};

export const siteMeta = {
  title: "Departamento Educativo – Zona Este",
  subtitle: "Convocatoria / Curso de Capacitación Ministerial 2026",
  description:
    "Portal oficial de información, orientación y seguimiento para la Convocatoria y Curso de Capacitación Ministerial 2026 de la Zona Este.",
};

export const navigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Inscripción", href: "/inscripcion" },
  { label: "Calendario", href: "/calendario" },
  { label: "Materias", href: "/materias" },
  { label: "Classroom", href: "/classroom" },
  { label: "Recursos", href: "/recursos" },
  { label: "Ayuda", href: "/ayuda" },
];

export const secondaryNavigation: NavItem[] = [
  { label: "Convocatoria", href: "/convocatoria" },
  { label: "Recursos", href: "/recursos" },
  { label: "Reuniones", href: "/reuniones" },
  { label: "FAQ", href: "/faq" },
];

export const colorPalette = [
  { name: "Marfil", hex: "#f8f6f1" },
  { name: "Niebla", hex: "#eef3f7" },
  { name: "Azul base", hex: "#3f6f94" },
  { name: "Azul institucional", hex: "#284860" },
  { name: "Azul profundo", hex: "#11202a" },
  { name: "Arena suave", hex: "#e7dfd2" },
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
    description: "Completa tu preinscripción mediante el formulario oficial.",
    href: "https://example.com/registro",
    external: true,
  },
  {
    title: "Google Classroom",
    description: "Consulta clases, tareas, avisos y entregas de cada materia.",
    href: "/classroom",
  },
  {
    title: "Zoom",
    description: "Accede a reuniones informativas y sesiones en vivo.",
    href: "/reuniones",
  },
  {
    title: "Recursos",
    description: "Encuentra formatos, documentos y carpetas de apoyo.",
    href: "/recursos",
  },
  {
    title: "Documentos",
    description: "Revisa el listado de documentos de matriculación.",
    href: "/inscripcion#documentos",
  },
  {
    title: "Contacto Zona Este",
    description: "Solicita orientación directa al equipo responsable.",
    href: "/ayuda",
  },
];

export const footerLinks: NavItem[] = [
  { label: "Inscripción", href: "/inscripcion" },
  { label: "Calendario", href: "/calendario" },
  { label: "Classroom", href: "/classroom" },
  { label: "Recursos", href: "/recursos" },
  { label: "Ayuda", href: "/ayuda" },
];
