import { managedLinks } from "./links";

export const processStatus = {
  currentPhase: "Diagnósticos y Documentos Pendientes",
  nextPhase: "Entrevista Formal",
  currentMessage: "Esta semana cada estudiante debe completar los 3 diagnósticos. Si aún no has subido tus documentos, súbelos también.",
  nextMessage: "Cuando completes los diagnósticos y tengas tus documentos enviados, nuestro equipo te contactará para tu entrevista final.",
};

export const processSequence = [
  {
    step: "Paso 1",
    title: "Sube tus documentos si aún no lo has hecho",
    description: "Si ya subiste tus documentos, continúa con los diagnósticos. Si no, usa este formulario antes de seguir.",
    href: managedLinks.documentUploadForm.href,
    external: managedLinks.documentUploadForm.external,
    status: "available" as const,
    buttonLabel: "Subir documentos",
  },
  {
    step: "Paso 2",
    title: "Diagnóstico Vocacional",
    description: "Completa este formulario de manera individual.",
    href: managedLinks.vocationalDiagnosticForm.href,
    external: managedLinks.vocationalDiagnosticForm.external,
    status: "available" as const,
    buttonLabel: "Abrir diagnóstico",
  },
  {
    step: "Paso 3",
    title: "Diagnóstico Ministerial",
    description: "Después del primero, completa este segundo formulario.",
    href: managedLinks.ministerialDiagnosticForm.href,
    external: managedLinks.ministerialDiagnosticForm.external,
    status: "available" as const,
    buttonLabel: "Abrir diagnóstico",
  },
  {
    step: "Paso 4",
    title: "Diagnóstico de Liderazgo y Servicio",
    description: "Completa este tercer formulario para cerrar tu etapa de diagnósticos.",
    href: managedLinks.leadershipDiagnosticForm.href,
    external: managedLinks.leadershipDiagnosticForm.external,
    status: "available" as const,
    buttonLabel: "Abrir diagnóstico",
  },
  {
    step: "Paso 5",
    title: "Espera tu entrevista formal",
    description: "Después de completar los 3 diagnósticos y tener tus documentos enviados, nuestro equipo te contactará para la entrevista final.",
    href: "/ayuda",
    status: "pending" as const,
    buttonLabel: "Pendiente",
  },
];
