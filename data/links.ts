export type LinkStatus = "available" | "pending";

export type ManagedLink = {
  href: string;
  external?: boolean;
  status: LinkStatus;
  note?: string;
};

export const managedLinks: {
  registrationForm: ManagedLink;
  inscriptionRequestPdf: ManagedLink;
  convocatoriaPdf: ManagedLink;
  generalDrive: ManagedLink;
  helpForm: ManagedLink;
  orientationZoom: ManagedLink;
  classroomAccess: ManagedLink;
} = {
  registrationForm: {
    href: "/ayuda",
    external: false,
    status: "pending",
    note: "Pendiente de publicación del formulario oficial de registro.",
  },
  inscriptionRequestPdf: {
    href: "/recursos",
    external: false,
    status: "pending",
    note: "Pendiente de publicación del formato oficial firmado.",
  },
  convocatoriaPdf: {
    href: "/recursos",
    external: false,
    status: "pending",
    note: "Pendiente de publicación del PDF oficial de la convocatoria.",
  },
  generalDrive: {
    href: "https://drive.google.com/drive/folders/1b7423b7U1tg5NqfkcqFh3h9upq3FVXVx?usp=drive_link",
    external: true,
    status: "available",
    note: "Carpeta general de recursos ya publicada.",
  },
  helpForm: {
    href: "/ayuda",
    external: false,
    status: "pending",
    note: "Pendiente de conectar un formulario real de ayuda y seguimiento.",
  },
  orientationZoom: {
    href: "/reuniones",
    external: false,
    status: "pending",
    note: "Pendiente de publicación del enlace oficial de Zoom.",
  },
  classroomAccess: {
    href: "https://classroom.google.com/c/NzI1NzEyOTk4NDcz?cjc=zsj54j4a",
    external: true,
    status: "available",
    note: "Acceso general de Classroom ya publicado.",
  },
};

export const publishingChecklist = [
  {
    title: "Formulario de Registro",
    audience: "Aspirantes",
    ...managedLinks.registrationForm,
  },
  {
    title: "Solicitud de Inscripción",
    audience: "Aspirantes",
    ...managedLinks.inscriptionRequestPdf,
  },
  {
    title: "Convocatoria Oficial PDF",
    audience: "Consulta general",
    ...managedLinks.convocatoriaPdf,
  },
  {
    title: "Carpeta General de Recursos",
    audience: "Alumnos",
    ...managedLinks.generalDrive,
  },
  {
    title: "Enlaces de Zoom",
    audience: "Aspirantes y alumnos",
    ...managedLinks.orientationZoom,
  },
  {
    title: "Accesos de Classroom",
    audience: "Alumnos",
    ...managedLinks.classroomAccess,
  },
  {
    title: "Formulario de Ayuda",
    audience: "Soporte",
    ...managedLinks.helpForm,
  },
];

export function isLinkAvailable(link: ManagedLink) {
  return link.status === "available";
}
