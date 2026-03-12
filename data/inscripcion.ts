import { managedLinks } from "./links";

type RegistrationCta = {
  label: string;
  href: string;
  external?: boolean;
  status: "available" | "pending";
  note?: string;
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
      "Ingresa al registro oficial cuando sea publicado, completa tus datos y confirma tu preinscripción en el sistema.",
  },
  {
    title: "Prepara tus documentos",
    description:
      "Después del registro, comienza a reunir los documentos físicos para tu matriculación.",
  },
  {
    title: "Da seguimiento al proceso",
    description:
      "Mantente atento a examen diagnóstico, reunión informativa, entrevista vocacional e inicio de clases.",
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
    label: "Ver Solicitud",
    ...managedLinks.inscriptionRequestPdf,
  },
  {
    label: "Registro en Línea",
    ...managedLinks.registrationForm,
  },
  {
    label: "Ver Documentos",
    href: "#documentos",
    status: "available" as const,
  },
  {
    label: "Obtener Ayuda",
    href: "/ayuda",
    status: "available" as const,
  },
];

export const registrationNotes = [
  "Si tienes preguntas sobre el registro en línea, comunícate con el Responsable del Departamento Educativo de tu zona.",
  "No esperes al final para reunir documentos. Lo recomendable es prepararlos en cuanto completes tu registro.",
];
