export type PortalStudent = {
  id: string;
  fullName: string;
  status: "Activo" | "En revisión" | "Pendiente";
  currentCourse: string;
  progressPercent: number;
  contact: string;
  zone: string;
};

export type PortalLesson = {
  id: string;
  title: string;
  summary: string;
  scripture: string;
  videoLink: string;
  resources: string[];
  visibility: "Visible" | "Borrador";
};

export type PortalCourse = {
  slug: string;
  title: string;
  description: string;
  lessons: PortalLesson[];
  files: string[];
  videoEmbed: string;
  quizTitle: string;
  assignmentTitle: string;
};

export type PortalAssignment = {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  submissionStatus: "Pendiente" | "Recibida" | "Revisada";
  studentName: string;
  score?: string;
};

export type PortalQuizQuestion = {
  id: string;
  prompt: string;
  options: { key: "A" | "B" | "C" | "D"; label: string }[];
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
};

export type PortalAnnouncement = {
  id: string;
  date: string;
  title: string;
  body: string;
  audience: string;
};

export type PortalResource = {
  id: string;
  title: string;
  category: "PDFs" | "Videos" | "Formularios" | "Guías";
  tag: string;
  description: string;
};

export type PortalCalendarItem = {
  id: string;
  type: "Inicio" | "Entrega" | "Reunión" | "Diagnóstico";
  title: string;
  date: string;
  notes: string;
};

export const portalSummary = {
  totalStudents: 38,
  activeCourses: 10,
  pendingAssignments: 12,
  announcements: 4,
};

export const portalStudents: PortalStudent[] = [
  {
    id: "samuel-garcia",
    fullName: "Samuel García Rivera",
    status: "Activo",
    currentCourse: "Dirección de Culto",
    progressPercent: 32,
    contact: "samuel.garcia@example.com",
    zone: "Zona Este",
  },
  {
    id: "daniel-perez",
    fullName: "Daniel Pérez Morales",
    status: "En revisión",
    currentCourse: "Administración I",
    progressPercent: 18,
    contact: "daniel.perez@example.com",
    zone: "Zona Este",
  },
  {
    id: "josue-martinez",
    fullName: "Josué Martínez López",
    status: "Pendiente",
    currentCourse: "Registro inicial",
    progressPercent: 5,
    contact: "josue.martinez@example.com",
    zone: "Zona Este",
  },
  {
    id: "israel-ramirez",
    fullName: "Israel Ramírez Cruz",
    status: "Activo",
    currentCourse: "Ética Ministerial",
    progressPercent: 64,
    contact: "israel.ramirez@example.com",
    zone: "Zona Este",
  },
];

export const portalCourses: PortalCourse[] = [
  {
    slug: "direccion-de-culto",
    title: "Dirección de Culto",
    description: "Módulo interno para administrar materiales, lecciones, tareas y evaluaciones.",
    lessons: [
      {
        id: "dc-1",
        title: "Introducción al orden del culto",
        summary: "Panorama general del desarrollo y orden interno del culto.",
        scripture: "1 Corintios 14:40",
        videoLink: "https://www.youtube.com/watch?v=example1",
        resources: ["Guía de clase.pdf", "Esquema de participación.pdf"],
        visibility: "Visible",
      },
      {
        id: "dc-2",
        title: "Participación reverente",
        summary: "Buenas prácticas para el servicio y la participación.",
        scripture: "Salmo 100:2",
        videoLink: "https://www.youtube.com/watch?v=example2",
        resources: ["Lectura complementaria.pdf"],
        visibility: "Borrador",
      },
    ],
    files: ["Programa del módulo.pdf", "Material base.docx"],
    videoEmbed: "https://www.youtube.com/embed/example1",
    quizTitle: "Evaluación diagnóstica del módulo",
    assignmentTitle: "Reflexión escrita sobre orden y reverencia",
  },
  {
    slug: "historia-biblica",
    title: "Historia Bíblica",
    description: "Espacio de ejemplo para un módulo de historia y contexto bíblico.",
    lessons: [
      {
        id: "hb-1",
        title: "Panorama histórico",
        summary: "Resumen del contexto histórico bíblico.",
        scripture: "Hebreos 1:1",
        videoLink: "https://www.youtube.com/watch?v=example3",
        resources: ["Cronología.pdf"],
        visibility: "Visible",
      },
    ],
    files: ["Resumen cronológico.pdf"],
    videoEmbed: "https://www.youtube.com/embed/example3",
    quizTitle: "Preguntas de repaso histórico",
    assignmentTitle: "Línea del tiempo bíblica",
  },
  {
    slug: "doctrina",
    title: "Doctrina",
    description: "Área para desarrollo doctrinal, evaluación y seguimiento del curso.",
    lessons: [
      {
        id: "do-1",
        title: "Fundamentos doctrinales",
        summary: "Principios iniciales del curso doctrinal.",
        scripture: "2 Timoteo 3:16",
        videoLink: "https://www.youtube.com/watch?v=example4",
        resources: ["Fundamentos.pdf"],
        visibility: "Visible",
      },
    ],
    files: ["Síntesis doctrinal.pdf"],
    videoEmbed: "https://www.youtube.com/embed/example4",
    quizTitle: "Evaluación de fundamentos",
    assignmentTitle: "Ensayo doctrinal",
  },
  {
    slug: "etica-ministerial",
    title: "Ética Ministerial",
    description: "Seguimiento interno de contenidos y responsabilidades ministeriales.",
    lessons: [
      {
        id: "em-1",
        title: "Testimonio y conducta",
        summary: "Llamado al buen testimonio dentro y fuera de la congregación.",
        scripture: "1 Timoteo 4:12",
        videoLink: "https://www.youtube.com/watch?v=example5",
        resources: ["Código de conducta.pdf"],
        visibility: "Visible",
      },
    ],
    files: ["Lecturas recomendadas.pdf"],
    videoEmbed: "https://www.youtube.com/embed/example5",
    quizTitle: "Autoevaluación ética",
    assignmentTitle: "Reflexión sobre el testimonio cristiano",
  },
];

export const portalAssignments: PortalAssignment[] = [
  {
    id: "asig-1",
    title: "Reflexión escrita sobre el culto",
    course: "Dirección de Culto",
    dueDate: "15 Junio 2026",
    submissionStatus: "Pendiente",
    studentName: "Samuel García Rivera",
  },
  {
    id: "asig-2",
    title: "Ensayo doctrinal breve",
    course: "Doctrina",
    dueDate: "22 Junio 2026",
    submissionStatus: "Recibida",
    studentName: "Israel Ramírez Cruz",
    score: "Pendiente",
  },
  {
    id: "asig-3",
    title: "Análisis histórico",
    course: "Historia Bíblica",
    dueDate: "30 Junio 2026",
    submissionStatus: "Revisada",
    studentName: "Daniel Pérez Morales",
    score: "9.0",
  },
];

export const portalQuizQuestions: PortalQuizQuestion[] = [
  {
    id: "quiz-1",
    prompt: "¿Cuál es el propósito principal de una evaluación diagnóstica?",
    options: [
      { key: "A", label: "Definir una calificación final" },
      { key: "B", label: "Conocer el nivel inicial del alumno" },
      { key: "C", label: "Sustituir las tareas del curso" },
      { key: "D", label: "Cerrar el módulo completo" },
    ],
    correctAnswer: "B",
    explanation: "La evaluación diagnóstica ayuda a conocer el punto de partida del alumno.",
  },
  {
    id: "quiz-2",
    prompt: "¿Qué debe incluir una lección interna bien preparada?",
    options: [
      { key: "A", label: "Solo un video" },
      { key: "B", label: "Solo una tarea" },
      { key: "C", label: "Resumen, referencia, recursos y estatus" },
      { key: "D", label: "Solo una calificación" },
    ],
    correctAnswer: "C",
    explanation: "La estructura básica debe incluir resumen, referencia, recursos y visibilidad.",
  },
];

export const portalAnnouncements: PortalAnnouncement[] = [
  {
    id: "an-1",
    date: "24 Marzo 2026",
    title: "Portal interno preparado para administración",
    body: "Se habilitó el entorno interno para revisar estudiantes, materias y recursos con datos de ejemplo.",
    audience: "Administración",
  },
  {
    id: "an-2",
    date: "26 Marzo 2026",
    title: "Revisión de materiales pendientes",
    body: "Verificar qué lecciones internas requieren PDF, video o visibilidad antes de abrir al equipo docente.",
    audience: "Administración y educadores",
  },
];

export const portalResources: PortalResource[] = [
  {
    id: "res-1",
    title: "Formato de guía de estudio",
    category: "PDFs",
    tag: "Plantilla",
    description: "Documento base para estructurar nuevas lecciones.",
  },
  {
    id: "res-2",
    title: "Video introductorio del módulo",
    category: "Videos",
    tag: "Referencia",
    description: "Enlace de muestra para futuras lecciones con video.",
  },
  {
    id: "res-3",
    title: "Formulario interno de seguimiento",
    category: "Formularios",
    tag: "Seguimiento",
    description: "Formulario de ejemplo para procesos administrativos.",
  },
  {
    id: "res-4",
    title: "Guía para revisión de tareas",
    category: "Guías",
    tag: "Evaluación",
    description: "Criterios y pasos sugeridos para revisión interna.",
  },
];

export const portalCalendarItems: PortalCalendarItem[] = [
  {
    id: "cal-1",
    type: "Inicio",
    title: "Inicio del módulo Dirección de Culto",
    date: "03 Mayo 2026",
    notes: "Apertura de materiales internos y seguimiento de clase.",
  },
  {
    id: "cal-2",
    type: "Diagnóstico",
    title: "Diagnósticos internos",
    date: "Pendiente de publicación",
    notes: "La fecha se habilitará cuando la siguiente fase quede abierta.",
  },
  {
    id: "cal-3",
    type: "Reunión",
    title: "Reunión de orientación para inscritos",
    date: "Pendiente de publicación",
    notes: "Definir horario y enlace interno cuando se abra la convocatoria correspondiente.",
  },
  {
    id: "cal-4",
    type: "Entrega",
    title: "Primer corte de revisión de tareas",
    date: "20 Junio 2026",
    notes: "Revisión administrativa de entregas y progreso.",
  },
];

// TODO: Move these mock collections into Supabase tables when the internal portal advances to
// real user accounts, file storage, quiz persistence, and role-based access.
