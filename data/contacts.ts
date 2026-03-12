export type Contact = {
  name: string;
  role: string;
  phone: string;
  primary?: boolean;
};

export const contacts: Contact[] = [
  { name: "Hno Eliud Guevara", role: "Encargado", phone: "832-661-6355", primary: true },
  { name: "Hno Marco Antonio Tellez", role: "Secretario", phone: "347-891-5351" },
  { name: "Hno Abraham Torres", role: "Educador Ministerial", phone: "929-206-9728" },
  { name: "Hno Isai Chavez", role: "Educador Ministerial", phone: "347-266-5321" },
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
