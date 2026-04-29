export type LinkStatus = "available" | "pending";

export type ManagedLink = {
  href: string;
  external?: boolean;
  status: LinkStatus;
  note?: string;
};

export const managedLinks: {
  registrationForm: ManagedLink;
  documentUploadForm: ManagedLink;
  vocationalDiagnosticForm: ManagedLink;
  ministerialDiagnosticForm: ManagedLink;
  leadershipDiagnosticForm: ManagedLink;
  inscriptionRequestPdf: ManagedLink;
  convocatoriaPdf: ManagedLink;
  generalDrive: ManagedLink;
  orientationZoom: ManagedLink;
  classroomAccess: ManagedLink;
} = {
  registrationForm: {
    href: "https://forms.gle/KrfJ7DsGdrzJkEEG6",
    external: true,
    status: "available",
    note: "Formulario oficial de registro inicial para Varones Bautizados, Laicos y Ayudas.",
  },
  documentUploadForm: {
    href: "https://forms.gle/cVXLRmNdGrRcbNJm8",
    external: true,
    status: "available",
    note: "Formulario oficial para subir los documentos del proceso.",
  },
  vocationalDiagnosticForm: {
    href: "https://docs.google.com/forms/d/e/1FAIpQLScU86NwMhPpYujuwUQTFirdw6Yojw6_lHow9IHSGcTFD_WL1A/viewform",
    external: true,
    status: "available",
    note: "Diagnóstico Vocacional abierto actualmente.",
  },
  ministerialDiagnosticForm: {
    href: "https://docs.google.com/forms/d/e/1FAIpQLScSTJC5NYgmrHCqdJNBHJn3Di2ysk5MqWVPh5h-wzN3uJ48Hg/viewform",
    external: true,
    status: "available",
    note: "Diagnóstico Ministerial abierto actualmente.",
  },
  leadershipDiagnosticForm: {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeX33Nqfv7kQYrNMquinqzBUQkYY0zJFuybQyzUJaUZuJ-KsQ/viewform",
    external: true,
    status: "available",
    note: "Diagnóstico de Liderazgo y Servicio abierto actualmente.",
  },
  inscriptionRequestPdf: {
    href: "https://drive.google.com/file/d/1q-teDKbtI3d1w1trNFaS0xOtJGbQdGX-/view?usp=sharing",
    external: true,
    status: "available",
    note: "Formato oficial de Solicitud de Inscripción.",
  },
  convocatoriaPdf: {
    href: "https://drive.google.com/file/d/1B4BqaFlFgdHrrdrIfZrvwmNvXKIPtamk/view?usp=sharing",
    external: true,
    status: "available",
    note: "PDF oficial de la convocatoria.",
  },
  generalDrive: {
    href: "https://drive.google.com/drive/folders/1b7423b7U1tg5NqfkcqFh3h9upq3FVXVx?usp=drive_link",
    external: true,
    status: "available",
    note: "Carpeta general de recursos publicada.",
  },
  orientationZoom: {
    href: "/calendario",
    external: false,
    status: "pending",
    note: "El enlace oficial de Zoom se publicará más adelante en Calendario.",
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
    title: "Subir documentos",
    audience: "Estudiantes con documentos pendientes",
    ...managedLinks.documentUploadForm,
  },
  {
    title: "Diagnóstico Vocacional",
    audience: "Varones Bautizados, Laicos y Ayudas",
    ...managedLinks.vocationalDiagnosticForm,
  },
  {
    title: "Diagnóstico Ministerial",
    audience: "Varones Bautizados, Laicos y Ayudas",
    ...managedLinks.ministerialDiagnosticForm,
  },
  {
    title: "Diagnóstico de Liderazgo y Servicio",
    audience: "Varones Bautizados, Laicos y Ayudas",
    ...managedLinks.leadershipDiagnosticForm,
  },
  {
    title: "Convocatoria Oficial PDF",
    audience: "Consulta general",
    ...managedLinks.convocatoriaPdf,
  },
  {
    title: "Calendario General",
    audience: "Consulta general",
    href: "/calendario",
    status: "available" as const,
    note: "Úsalo solo como referencia general del curso.",
  },
];

export function isLinkAvailable(link: ManagedLink) {
  return link.status === "available";
}
