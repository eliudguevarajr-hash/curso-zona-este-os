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
    title: "Seguimiento academico",
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
    description: "Confirma primero el nombre de la materia, el codigo o el enlace correcto.",
  },
  {
    title: "Si tu codigo no funciona",
    description: "Comunicate con el responsable correspondiente antes de intentar otro acceso por tu cuenta.",
  },
  {
    title: "Si tienes duda sobre una tarea",
    description: "Revisa primero los anuncios y materiales dentro de Classroom y despues solicita apoyo.",
  },
];

export const classroomCourses = [
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
  href: "https://classroom.google.com/example",
  status: "Pendiente de publicacion",
}));
