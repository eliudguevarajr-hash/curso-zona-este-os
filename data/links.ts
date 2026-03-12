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
    href: "/recursos",
    external: false,
    status: "pending",
    note: "Pendiente de publicación de la carpeta oficial de materiales.",
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
    href: "/classroom",
    external: false,
    status: "available",
    note: "Consulta esta página para ver accesos publicados y ayuda de ingreso.",
  },
};

export function isLinkAvailable(link: ManagedLink) {
  return link.status === "available";
}
