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
    description: "Versión PDF para consulta y difusión.",
    category: "Convocatoria",
    type: "PDF",
    href: "https://example.com/convocatoria-2026.pdf",
  },
  {
    title: "Registro en Línea",
    description: "Formulario principal para iniciar el proceso.",
    category: "Registro",
    type: "Formulario",
    href: "https://example.com/registro",
  },
  {
    title: "Solicitud de Inscripción",
    description: "Formato para firma del Encargado de Localidad.",
    category: "Documentos",
    type: "PDF",
    href: "https://example.com/solicitud-inscripcion.pdf",
  },
  {
    title: "Carpeta de Materias",
    description: "Repositorio de materiales generales del curso.",
    category: "Materias",
    type: "Drive",
    href: "https://drive.google.com/example-materias",
  },
  {
    title: "Acceso General a Classroom",
    description: "Página con enlaces y códigos de cada materia.",
    category: "Classroom",
    type: "Classroom",
    href: "/classroom",
  },
  {
    title: "Sala Zoom de Orientación",
    description: "Enlace de referencia para reuniones informativas.",
    category: "Zoom",
    type: "Zoom",
    href: "https://zoom.us/j/example",
  },
  {
    title: "Formulario de Ayuda",
    description: "Solicitud de apoyo o aclaración de dudas.",
    category: "Formularios",
    type: "Formulario",
    href: "https://example.com/ayuda",
  },
  {
    title: "Guía General del Alumno",
    description: "Indicaciones básicas para dar seguimiento al curso.",
    category: "Recursos Generales",
    type: "PDF",
    href: "https://example.com/guia-alumno.pdf",
  },
];
