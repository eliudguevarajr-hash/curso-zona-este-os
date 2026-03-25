import { notFound } from "next/navigation";

import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { portalCourses } from "@/lib/mock-data/portal";

type CourseDetailPageProps = {
  params: Promise<{ courseSlug: string }>;
};

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { courseSlug } = await params;
  const course = portalCourses.find((item) => item.slug === courseSlug);

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Materias / Detalle"
        eyebrow="Módulo"
        title={course.title}
        description={course.description}
      />

      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
            <p className="eyebrow">Lecciones</p>
            <div className="mt-4 space-y-4">
              {course.lessons.map((lesson) => (
                <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4" key={lesson.id}>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-base font-semibold text-brand-900">{lesson.title}</h3>
                    <span className="rounded-full bg-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                      {lesson.visibility}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{lesson.summary}</p>
                  <p className="mt-2 text-sm text-slate-600">Referencia: {lesson.scripture}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
            <p className="eyebrow">Archivos descargables</p>
            <ul className="mt-4 space-y-3">
              {course.files.map((file) => (
                <li className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700" key={file}>
                  {file}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="space-y-4">
          <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
            <p className="eyebrow">Video</p>
            <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-sm leading-7 text-slate-700">Enlace de ejemplo para incrustar video o futura integración con biblioteca multimedia.</p>
              <p className="mt-3 text-sm font-semibold text-brand-800">{course.videoEmbed}</p>
            </div>
          </article>
          <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
            <p className="eyebrow">Examen / Quiz</p>
            <p className="mt-3 text-base font-semibold text-brand-900">{course.quizTitle}</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">Zona preparada para cuestionarios, banco de preguntas y evaluación por módulo.</p>
          </article>
          <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
            <p className="eyebrow">Tarea</p>
            <p className="mt-3 text-base font-semibold text-brand-900">{course.assignmentTitle}</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">Área lista para tareas, fechas límite, rúbricas y seguimiento de entregas.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
