export type Contact = {
  zone: string;
  person: string;
  phone: string;
  primary?: boolean;
};

export const contacts: Contact[] = [
  { zone: "Zona Este", person: "Hno Eliud Guevara", phone: "832-661-6355", primary: true },
  { zone: "Zona Midwest", person: "Hno Jorge Pineda", phone: "614-769-0882" },
  { zone: "Zona Noroeste", person: "Hno Ivan Ramirez", phone: "206-429-1790" },
  { zone: "Zona Suroeste", person: "Hno Daniel Garcia", phone: "408-630-1157" },
  { zone: "Zona Sur", person: "Hno Arsenio Flores", phone: "832-814-1694" },
  { zone: "Depto. Nacional", person: "Hno Angel Martinez", phone: "417-437-9466" },
];

export const supportAreas = [
  {
    title: "Ayuda con inscripción",
    description: "Orientación sobre el registro en línea, solicitud firmada y pasos iniciales.",
  },
  {
    title: "Ayuda con documentos",
    description: "Revisión del expediente y aclaraciones sobre requisitos de matriculación.",
  },
  {
    title: "Ayuda con Classroom",
    description: "Problemas de acceso, códigos de clase y seguimiento de tareas.",
  },
  {
    title: "Ayuda con reuniones",
    description: "Acceso a Zoom, horarios y orientación técnica básica.",
  },
];
