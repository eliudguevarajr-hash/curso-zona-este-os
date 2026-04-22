import { managedLinks } from "./links";

export const processStatus = {
  currentPhase: "Diagnósticos",
  nextPhase: "Entrevista Formal",
  currentMessage: "Esta semana cada estudiante debe completar los 3 diagnósticos de manera individual.",
  nextMessage: "Una vez completes los 3 formularios, nuestro equipo te contactará para tu entrevista final.",
};

export const processSequence = [
  {
    step: "Paso 1",
    title: "Diagnóstico Vocacional",
    description: "Completa este formulario de manera individual.",
    href: managedLinks.vocationalDiagnosticForm.href,
    external: managedLinks.vocationalDiagnosticForm.external,
    status: "available" as const,
    buttonLabel: "Abrir diagnóstico",
  },
  {
    step: "Paso 2",
    title: "Diagnóstico Ministerial",
    description: "Después del primero, completa este segundo formulario.",
    href: managedLinks.ministerialDiagnosticForm.href,
    external: managedLinks.ministerialDiagnosticForm.external,
    status: "available" as const,
    buttonLabel: "Abrir diagnóstico",
  },
  {
    step: "Paso 3",
    title: "Diagnóstico de Liderazgo y Servicio",
    description: "Completa este tercer formulario para cerrar tu etapa de diagnósticos.",
    href: managedLinks.leadershipDiagnosticForm.href,
    external: managedLinks.leadershipDiagnosticForm.external,
    status: "available" as const,
    buttonLabel: "Abrir diagnóstico",
  },
  {
    step: "Paso 4",
    title: "Espera tu entrevista formal",
    description: "Después de completar los 3 formularios, nuestro equipo te contactará para la entrevista final.",
    href: "/ayuda",
    status: "pending" as const,
    buttonLabel: "Pendiente",
  },
];
