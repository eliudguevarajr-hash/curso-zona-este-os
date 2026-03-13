import { managedLinks } from "./links";

export const classroomChecklist = [
  "Entra con el acceso general publicado.",
  "Revisa anuncios, materiales y avisos.",
  "Entrega tus actividades en el tiempo indicado.",
  "Si algo falla, comunícate con Ayuda.",
];

export const classroomSupportNotes = [
  {
    title: "No encuentro mi clase",
    description: "Usa primero el acceso general publicado y confirma el nombre de la materia.",
  },
  {
    title: "El acceso no funciona",
    description: "Verifica tu cuenta y luego comunícate con Ayuda si el problema continúa.",
  },
];

export const classroomAccess = {
  title: "Acceso General a Classroom",
  href: managedLinks.classroomAccess.href,
  external: managedLinks.classroomAccess.external,
  note: "Actualmente se usa un acceso general compartido para las materias publicadas.",
};

export const classroomSubjects = [
  "Dirección de Culto",
  "Administración I",
  "Hermenéutica",
  "Homilética",
  "Escuela Sabática",
  "Ética Ministerial",
  "Doctrina",
  "Profecía",
];
