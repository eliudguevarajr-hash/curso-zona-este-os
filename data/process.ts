import { managedLinks } from "./links";

export const processStatus = {
  currentPhase: "Registro y Carga de Documentos",
  nextPhase: "Diagnósticos",
  currentMessage: "Por ahora debes completar el registro y después subir tus documentos del proceso.",
  nextMessage: "Los diagnósticos se abrirán en la siguiente etapa del proceso.",
};

export const processSequence = [
  {
    step: "Paso 1",
    title: "Completa tu registro",
    description: "Llena el formulario oficial de registro para iniciar tu proceso.",
    href: managedLinks.registrationForm.href,
    external: managedLinks.registrationForm.external,
    status: "available" as const,
    buttonLabel: "Abrir registro",
  },
  {
    step: "Paso 2",
    title: "Sube tus documentos",
    description: "Después de registrarte, usa el formulario oficial para enviar tus documentos.",
    href: managedLinks.documentUploadForm.href,
    external: managedLinks.documentUploadForm.external,
    status: "available" as const,
    buttonLabel: "Subir documentos",
  },
  {
    step: "Paso 3",
    title: "Espera la siguiente fase",
    description: "Cuando esta etapa termine, se publicarán los diagnósticos y las siguientes indicaciones.",
    href: "/inscripcion",
    status: "pending" as const,
    buttonLabel: "Pendiente",
  },
];
