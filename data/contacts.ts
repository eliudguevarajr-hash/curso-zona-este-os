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
    title: "Inscripción",
    description: "Registro de Aspirante, diagnósticos, solicitud firmada y pasos iniciales.",
  },
  {
    title: "Documentos",
    description: "Expediente, requisitos de matrícula y revisión de formatos oficiales.",
  },
  {
    title: "Classroom",
    description: "Acceso, código de clase, tareas y problemas de ingreso.",
  },
  {
    title: "Reuniones",
    description: "Zoom, horarios y orientación técnica básica.",
  },
];
