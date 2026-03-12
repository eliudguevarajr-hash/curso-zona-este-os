import { managedLinks } from "./links";

type Meeting = {
  title: string;
  date: string;
  time: string;
  href: string;
  external?: boolean;
  linkStatus: "available" | "pending";
  meetingId: string;
  notes: string;
};

export const meetings: Meeting[] = [
  {
    title: "Reunión Informativa General",
    date: "20 marzo 2026",
    time: "7:00 PM",
    href: managedLinks.orientationZoom.href,
    external: managedLinks.orientationZoom.external,
    linkStatus: managedLinks.orientationZoom.status,
    meetingId: "Pendiente",
    notes: "Presentación del proceso, plan de estudios y orientación inicial.",
  },
  {
    title: "Sesión de Orientación para Inscritos",
    date: "30 abril 2026",
    time: "7:30 PM",
    href: managedLinks.orientationZoom.href,
    external: managedLinks.orientationZoom.external,
    linkStatus: managedLinks.orientationZoom.status,
    meetingId: "Pendiente",
    notes: "Repaso de accesos, uso de Classroom y calendario de arranque.",
  },
];

export const zoomTips = [
  "Verifica tu enlace y horario antes de ingresar.",
  "Procura entrar con tu nombre completo para facilitar el control de asistencia.",
  "Ten listo tu dispositivo, conexión y, si es posible, audífonos.",
  "Si no puedes acceder, comunícate con el equipo de Ayuda de Zona Este.",
];
