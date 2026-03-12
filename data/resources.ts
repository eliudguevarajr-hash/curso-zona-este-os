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
    description: "Versión PDF oficial para consulta y difusión.",
    category: "Convocatoria",
    type: "PDF",
    ...managedLinks.convocatoriaPdf,
  },
  {
    title: "Registro en Línea",
    description: "Formulario principal para iniciar el proceso.",
    category: "Registro",
    type: "Formulario",
    ...managedLinks.registrationForm,
  },
  {
    title: "Diagnóstico Vocacional",
    description: "Formulario oficial para identificar dones y área de servicio.",
    category: "Formularios",
    type: "Formulario",
    ...managedLinks.vocationalDiagnosticForm,
  },
  {
    title: "Diagnóstico Ministerial",
    description: "Formulario oficial para evaluación bíblica, doctrinal y administrativa.",
    category: "Formularios",
    type: "Formulario",
    ...managedLinks.ministerialDiagnosticForm,
  },
  {
    title: "Solicitud de Inscripción",
    description: "Formato oficial para firma del Encargado de Localidad.",
    category: "Documentos",
    type: "PDF",
    ...managedLinks.inscriptionRequestPdf,
  },
  {
    title: "Carpeta de Materias",
    description: "Repositorio general de materiales del curso.",
    category: "Materias",
    type: "Drive",
    ...managedLinks.generalDrive,
  },
  {
    title: "Acceso General a Classroom",
    description: "Acceso general ya publicado para consulta y seguimiento de clases.",
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
    title: "Guía General del Alumno",
    description: "Documento de apoyo general pendiente de publicación oficial.",
    category: "Recursos Generales",
    type: "PDF",
    href: "/recursos",
    status: "pending",
    note: "Pendiente de publicación de la guía general del alumno.",
  },
];
