import { notFound } from "next/navigation";

import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { PortalSectionCard } from "@/components/portal/portal-section-card";
import { getPortalCourseBySlug } from "@/lib/portal/data";

type CourseDetailPageProps = {
  params: Promise<{ courseSlug: string }>;
};

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { courseSlug } = await params;
  const course = await getPortalCourseBySlug(courseSlug);

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
          <PortalSectionCard eyebrow="Lecciones" title="Contenido del módulo">
            <div className="space-y-4">
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
          </PortalSectionCard>

          <PortalSectionCard eyebrow="Archivos" title="Descargas del módulo">
            <ul className="space-y-3">
              {course.files.map((file) => (
                <li className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700" key={file}>
                  {file}
                </li>
              ))}
            </ul>
          </PortalSectionCard>
        </div>

        <div className="space-y-4">
          <PortalSectionCard eyebrow="Video" title="Multimedia">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-sm leading-7 text-slate-700">Enlace de ejemplo para incrustar video o futura integración con biblioteca multimedia.</p>
              <p className="mt-3 text-sm font-semibold text-brand-800">{course.videoEmbed}</p>
            </div>
          </PortalSectionCard>

          <PortalSectionCard eyebrow="Examen / Quiz" title={course.quizTitle}>
            <p className="text-sm leading-7 text-slate-700">Zona preparada para cuestionarios, banco de preguntas y evaluación por módulo.</p>
          </PortalSectionCard>

          <PortalSectionCard eyebrow="Tarea" title={course.assignmentTitle}>
            <p className="text-sm leading-7 text-slate-700">Área lista para tareas, fechas límite, rúbricas y seguimiento de entregas.</p>
          </PortalSectionCard>
        </div>
      </section>
    </div>
  );
}
