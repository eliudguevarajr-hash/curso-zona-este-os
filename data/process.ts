export const processStatus = {
  currentPhase: "Registro para Varones Bautizados, Laicos y Ayudas",
  nextPhase: "Diagnósticos",
  currentMessage: "Por ahora solo está habilitado el registro para Varones Bautizados, Laicos y Ayudas.",
  nextMessage: "Los diagnósticos se abrirán en la siguiente etapa del proceso.",
};

export const processSequence = [
  {
    step: "Paso 1",
    title: "Registro inicial",
    description: "Completa el formulario oficial correspondiente para iniciar el proceso.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScHoJ_5VGPzDWljfjREdviRqGJT24FB3EhbdDNKllPn5eYDpw/viewform?pli=1",
    external: true,
    status: "available" as const,
    buttonLabel: "Abrir registro",
  },
  {
    step: "Paso 2",
    title: "Diagnósticos",
    description: "El diagnóstico vocacional y el ministerial se habilitarán en la siguiente etapa.",
    href: "/inscripcion#formularios",
    status: "pending" as const,
    buttonLabel: "Pendiente",
  },
  {
    step: "Paso 3",
    title: "Preparar documentos",
    description: "Reúne y revisa tu expediente físico. Todavía no es etapa de entrega.",
    href: "/inscripcion#documentos",
    status: "available" as const,
    buttonLabel: "Preparar documentos",
  },
];
