export type Contact = {
  name: string;
  role: string;
  phone: string;
  primary?: boolean;
};

export const contacts: Contact[] = [
  { name: "Hno. Eliud Guevara", role: "Encargado", phone: "832-661-6355", primary: true },
  { name: "Hno. Marco Antonio Tellez", role: "Secretario", phone: "347-891-5351" },
  { name: "Hno. Abraham Torres", role: "Educador Ministerial", phone: "929-206-9728" },
  { name: "Hno. Isai Chavez", role: "Educador Ministerial", phone: "347-266-5321" },
];

export const supportAreas = [
  {
    title: "Registro",
    description: "Dudas sobre el formulario inicial y el orden correcto del proceso.",
  },
  {
    title: "Documentos",
    description: "Dudas sobre qué documentos reunir y cómo subirlos en el formulario correspondiente.",
  },
  {
    title: "Siguientes etapas",
    description: "Preguntas sobre diagnósticos, calendario general o fases que todavía no están abiertas.",
  },
];
