import { managedLinks } from "./links";

export type ResourceCategory =
  | "Convocatoria"
  | "Registro"
  | "Documentos"
  | "Materias"
  | "Classroom"
  | "Zoom"
  | "Formularios"
  | "Recursos Generales";

export type ResourceItem = {
  title: string;
  description: string;
  category: ResourceCategory;
  type: "PDF" | "Formulario" | "Drive" | "Classroom" | "Zoom";
  href: string;
  status: "available" | "pending";
  external?: boolean;
  note?: string;
};

export const resourceCategories: ResourceCategory[] = [
  "Convocatoria",
  "Registro",
  "Documentos",
  "Materias",
  "Classroom",
  "Zoom",
  "Formularios",
  "Recursos Generales",
];

export const resourceItems: ResourceItem[] = [
  {
    title: "Convocatoria Oficial 2026",
    description: "Versión PDF para consulta y difusión cuando sea publicada oficialmente.",
    category: "Convocatoria",
    type: "PDF",
    ...managedLinks.convocatoriaPdf,
  },
  {
    title: "Registro en Línea",
    description: "Formulario principal para iniciar el proceso cuando esté disponible.",
    category: "Registro",
    type: "Formulario",
    ...managedLinks.registrationForm,
  },
  {
    title: "Solicitud de Inscripción",
    description: "Formato para firma del Encargado de Localidad cuando sea publicado.",
    category: "Documentos",
    type: "PDF",
    ...managedLinks.inscriptionRequestPdf,
  },
  {
    title: "Carpeta de Materias",
    description: "Repositorio general de materiales del curso cuando sea habilitado.",
    category: "Materias",
    type: "Drive",
    ...managedLinks.generalDrive,
  },
  {
    title: "Acceso General a Classroom",
    description: "Página con enlaces, códigos y ayuda de ingreso por materia.",
    category: "Classroom",
    type: "Classroom",
    ...managedLinks.classroomAccess,
  },
  {
    title: "Sala Zoom de Orientación",
    description: "Consulta reuniones y enlaces oficiales cuando sean publicados.",
    category: "Zoom",
    type: "Zoom",
    ...managedLinks.orientationZoom,
  },
  {
    title: "Formulario de Ayuda",
    description: "Solicitud de apoyo o aclaración de dudas. Por ahora usa la página de ayuda.",
    category: "Formularios",
    type: "Formulario",
    ...managedLinks.helpForm,
  },
  {
    title: "Guía General del Alumno",
    description: "Documento de apoyo general pendiente de publicación oficial.",
    category: "Recursos Generales",
    type: "PDF",
    href: "/recursos",
    status: "pending",
    note: "Pendiente de publicación de la guía general del alumno.",
  },
];
