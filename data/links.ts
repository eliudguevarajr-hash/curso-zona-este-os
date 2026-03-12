export type LinkStatus = "available" | "pending";

export type ManagedLink = {
  href: string;
  external?: boolean;
  status: LinkStatus;
  note?: string;
};

export const managedLinks: {
  registrationForm: ManagedLink;
  vocationalDiagnosticForm: ManagedLink;
  ministerialDiagnosticForm: ManagedLink;
  inscriptionRequestPdf: ManagedLink;
  convocatoriaPdf: ManagedLink;
  generalDrive: ManagedLink;
  orientationZoom: ManagedLink;
  classroomAccess: ManagedLink;
} = {
  registrationForm: {
    href: "https://docs.google.com/forms/d/e/1FAIpQLScHoJ_5VGPzDWljfjREdviRqGJT24FB3EhbdDNKllPn5eYDpw/viewform?pli=1",
    external: true,
    status: "available",
    note: "Formulario oficial para registro de aspirante.",
  },
  vocationalDiagnosticForm: {
    href: "https://docs.google.com/forms/d/e/1FAIpQLScU86NwMhPpYujuwUQTFirdw6Yojw6_lHow9IHSGcTFD_WL1A/viewform",
    external: true,
    status: "available",
    note: "Formulario oficial para diagnóstico vocacional.",
  },
  ministerialDiagnosticForm: {
    href: "https://docs.google.com/forms/d/e/1FAIpQLScSTJC5NYgmrHCqdJNBHJn3Di2ysk5MqWVPh5h-wzN3uJ48Hg/viewform",
    external: true,
    status: "available",
    note: "Formulario oficial para diagnóstico ministerial.",
  },
  inscriptionRequestPdf: {
    href: "https://drive.google.com/file/d/1q-teDKbtI3d1w1trNFaS0xOtJGbQdGX-/view?usp=sharing",
    external: true,
    status: "available",
    note: "Formato oficial de Solicitud de Inscripción ya publicado.",
  },
  convocatoriaPdf: {
    href: "https://drive.google.com/file/d/1B4BqaFlFgdHrrdrIfZrvwmNvXKIPtamk/view?usp=sharing",
    external: true,
    status: "available",
    note: "PDF oficial de la convocatoria ya publicado.",
  },
  generalDrive: {
    href: "https://drive.google.com/drive/folders/1b7423b7U1tg5NqfkcqFh3h9upq3FVXVx?usp=drive_link",
    external: true,
    status: "available",
    note: "Carpeta general de recursos ya publicada.",
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
    title: "Registro de Aspirante",
    audience: "Aspirantes",
    ...managedLinks.registrationForm,
  },
  {
    title: "Diagnóstico Vocacional",
    audience: "Aspirantes",
    ...managedLinks.vocationalDiagnosticForm,
  },
  {
    title: "Diagnóstico Ministerial",
    audience: "Aspirantes",
    ...managedLinks.ministerialDiagnosticForm,
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
];

export function isLinkAvailable(link: ManagedLink) {
  return link.status === "available";
}
