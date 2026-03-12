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
      "Acércate al Encargado de tu Localidad, manifiesta tu deseo de participar y solicita tu Solicitud de Inscripción firmada.",
  },
  {
    title: "Haz tu registro en línea",
    description:
      "Ingresa al formulario oficial de aspirante, completa tus datos y confirma tu preinscripción en el sistema.",
  },
  {
    title: "Completa tus diagnósticos",
    description:
      "Después del registro, completa el diagnóstico vocacional y el diagnóstico ministerial desde los formularios oficiales publicados.",
  },
  {
    title: "Prepara tus documentos",
    description:
      "Comienza a reunir los documentos físicos para tu matriculación y da seguimiento a las siguientes etapas del proceso.",
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
    title: "Registro para Aspirante",
    description: "Completa tu información básica y carga los documentos iniciales en el formulario oficial.",
    href: managedLinks.registrationForm.href,
    external: managedLinks.registrationForm.external,
    status: managedLinks.registrationForm.status,
    note: managedLinks.registrationForm.note ?? "",
  },
  {
    title: "Diagnóstico Vocacional",
    description: "Identifica tus dones y el área de servicio a la que el Señor te está llamando.",
    href: managedLinks.vocationalDiagnosticForm.href,
    external: managedLinks.vocationalDiagnosticForm.external,
    status: managedLinks.vocationalDiagnosticForm.status,
    note: managedLinks.vocationalDiagnosticForm.note ?? "",
  },
  {
    title: "Diagnóstico Ministerial",
    description: "Evaluación breve sobre tus conocimientos bíblicos, doctrinales y administrativos.",
    href: managedLinks.ministerialDiagnosticForm.href,
    external: managedLinks.ministerialDiagnosticForm.external,
    status: managedLinks.ministerialDiagnosticForm.status,
    note: managedLinks.ministerialDiagnosticForm.note ?? "",
  },
  {
    title: "Entrevista Ministerial",
    description: "Paso final. No requiere llenar formulario en línea.",
    status: "pending",
    note: "Nuestro equipo te contactará por correo o mensaje para programar tu entrevista vía Zoom. El enlace de Zoom se publicará más adelante.",
  },
];

export const registrationNotes = [
  "Si tienes preguntas sobre el registro en línea, comunícate con el Responsable del Departamento Educativo de tu zona.",
  "Ya están disponibles los formularios de registro y diagnósticos, la Solicitud de Inscripción y la convocatoria PDF. Los enlaces de Zoom se publicarán más adelante.",
];
