import { managedLinks } from "./links";

type RegistrationCta = {
  label: string;
  href: string;
  external?: boolean;
  status: "available" | "pending";
  note?: string;
};

type ProcessForm = {
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  status: "available" | "pending";
  note: string;
};

export const registrationSteps = [
  {
    title: "Habla con tu localidad",
    description:
      "Acércate al Encargado de tu Localidad y solicita tu Solicitud de Inscripción firmada.",
  },
  {
    title: "Haz tu registro en línea",
    description:
      "Completa el Registro de Aspirante con tus datos básicos.",
  },
  {
    title: "Espera la siguiente etapa",
    description:
      "Los diagnósticos se abrirán cuando corresponda dentro del proceso.",
  },
  {
    title: "Prepara tus documentos",
    description:
      "Reúne los documentos físicos para tu matrícula.",
  },
];

export const requiredDocuments = [
  "Solicitud de Inscripción firmada por el Encargado de Localidad",
  "Copia del ID correspondiente según el país",
  "Copia del Acta de Nacimiento",
  "Copia del Acta de Matrimonio, en caso de que aplique",
  "Copia del Certificado de Estudios",
  "Copia del Acta de Bautizo emitida por la Iglesia de Dios (Israelita); si no se tiene disponible, debe reportarse al Departamento Educativo de la zona para su resolución",
];

export const registrationCtas: RegistrationCta[] = [
  {
    label: "Registro de Aspirante",
    ...managedLinks.registrationForm,
  },
  {
    label: "Diagnóstico Vocacional",
    ...managedLinks.vocationalDiagnosticForm,
  },
  {
    label: "Diagnóstico Ministerial",
    ...managedLinks.ministerialDiagnosticForm,
  },
  {
    label: "Ver Solicitud",
    ...managedLinks.inscriptionRequestPdf,
  },
  {
    label: "Ver Documentos",
    href: "#documentos",
    status: "available",
  },
  {
    label: "Obtener Ayuda",
    href: "/ayuda",
    status: "available",
  },
];

export const processForms: ProcessForm[] = [
  {
    title: "Registro de Aspirante",
    description: "Completa tu información básica en el formulario oficial.",
    href: managedLinks.registrationForm.href,
    external: managedLinks.registrationForm.external,
    status: managedLinks.registrationForm.status,
    note: managedLinks.registrationForm.note ?? "",
  },
  {
    title: "Diagnóstico Vocacional",
    description: "Se habilitará cuando esta etapa esté disponible.",
    href: managedLinks.vocationalDiagnosticForm.href,
    external: managedLinks.vocationalDiagnosticForm.external,
    status: managedLinks.vocationalDiagnosticForm.status,
    note: managedLinks.vocationalDiagnosticForm.note ?? "",
  },
  {
    title: "Diagnóstico Ministerial",
    description: "Se habilitará cuando esta etapa esté disponible.",
    href: managedLinks.ministerialDiagnosticForm.href,
    external: managedLinks.ministerialDiagnosticForm.external,
    status: managedLinks.ministerialDiagnosticForm.status,
    note: managedLinks.ministerialDiagnosticForm.note ?? "",
  },
  {
    title: "Entrevista Ministerial",
    description: "Paso final. No requiere formulario en línea.",
    status: "pending",
    note: "El equipo de Zona Este te contactará para programar la entrevista. El enlace de Zoom se publicará más adelante en Calendario.",
  },
];

export const registrationNotes = [
  "Si tienes preguntas sobre el registro en línea, comunícate con el equipo de Ayuda de Zona Este.",
  "Por ahora solo está habilitado el Registro de Aspirante. Los diagnósticos siguen pendientes.",
];
