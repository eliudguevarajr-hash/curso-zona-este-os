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
    title: "Documentos pendientes",
    description: "Dudas sobre el formulario para subir documentos si todavía no los has enviado.",
  },
  {
    title: "Diagnósticos",
    description: "Dudas sobre el orden correcto de los 3 formularios y cómo completarlos.",
  },
  {
    title: "Entrevista final",
    description: "Preguntas sobre el contacto posterior y la entrevista formal después de los 3 diagnósticos.",
  },
];
