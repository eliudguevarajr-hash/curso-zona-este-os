import { managedLinks } from "./links";

type ClassroomCourseLink = {
  title: string;
  code: string;
  href: string;
  external?: boolean;
  status: string;
  linkStatus: "available" | "pending";
  note: string;
};

export const classroomUsage = [
  {
    title: "Tareas y entregas",
    description: "Todas las actividades y entregas de materias se realizan en Google Classroom.",
  },
  {
    title: "Avisos de clase",
    description: "Los alumnos deben revisar anuncios, materiales y recordatorios publicados por el maestro.",
  },
  {
    title: "Seguimiento académico",
    description: "Classroom es el espacio para dar seguimiento a cada materia ya asignada.",
  },
];

export const classroomChecklist = [
  "Entra a tu clase o materia asignada.",
  "Revisa anuncios, materiales y avisos del maestro.",
  "Entrega tus actividades en el tiempo indicado.",
  "Busca ayuda si no puedes entrar o no ves tu clase.",
];

export const classroomSupportNotes = [
  {
    title: "Si no encuentras tu clase",
    description: "Confirma primero el nombre de la materia, el código o el enlace correcto.",
  },
  {
    title: "Si tu código no funciona",
    description: "Comunícate con el responsable correspondiente antes de intentar otro acceso por tu cuenta.",
  },
  {
    title: "Si tienes duda sobre una tarea",
    description: "Revisa primero los anuncios y materiales dentro de Classroom y después solicita apoyo.",
  },
];

export const classroomCourses: ClassroomCourseLink[] = [
  "Dirección de Culto",
  "Administración I",
  "Hermenéutica",
  "Homilética",
  "Escuela Sabática",
  "Ética Ministerial",
  "Doctrina",
  "Profecía",
].map((course, index) => ({
  title: course,
  code: `CCM2026-${index + 1}X`,
  href: managedLinks.classroomAccess.href,
  external: managedLinks.classroomAccess.external,
  status: "Pendiente de publicación",
  linkStatus: "pending" as const,
  note: "El acceso oficial de esta materia aún no ha sido publicado.",
}));
