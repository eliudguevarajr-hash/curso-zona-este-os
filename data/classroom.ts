export const classroomOverview = [
  "Google Classroom será la plataforma para tareas, entregas y actividad académica de cada materia.",
  "El sitio web funciona como centro oficial de información y navegación. No sustituye el uso de Classroom.",
  "Cada alumno deberá ingresar a su clase asignada, revisar anuncios y entregar sus actividades en tiempo.",
];

export const classroomSteps = [
  "Ingresa a tu clase o materia asignada.",
  "Revisa anuncios, materiales y avisos del maestro.",
  "Completa y entrega tus actividades dentro del tiempo indicado.",
  "Solicita apoyo si tienes problemas de acceso o no encuentras tu clase.",
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
}));
