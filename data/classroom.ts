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

export const classroomChecklist = [
  "Entra a tu clase o materia asignada.",
  "Revisa anuncios, materiales y avisos del maestro.",
  "Entrega tus actividades en el tiempo indicado.",
  "Busca ayuda si no puedes entrar o no ves tu clase.",
];

export const classroomSupportNotes = [
  {
    title: "No encuentro mi clase",
    description: "Confirma primero el nombre de la materia y usa el acceso general publicado.",
  },
  {
    title: "El acceso no funciona",
    description: "Verifica que hayas iniciado sesión en tu cuenta correcta y luego comunícate con Ayuda si el problema continúa.",
  },
  {
    title: "Tengo duda sobre una tarea",
    description: "Revisa anuncios y materiales dentro de Classroom antes de solicitar apoyo.",
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
  status:
    managedLinks.classroomAccess.status === "available"
      ? "Acceso general disponible"
      : "Pendiente de publicación",
  linkStatus: managedLinks.classroomAccess.status,
  note:
    managedLinks.classroomAccess.status === "available"
      ? "Actualmente se usa el acceso general compartido. Cuando existan enlaces o códigos por materia, se sustituirán aquí."
      : "El acceso oficial de esta materia aún no ha sido publicado.",
}));
