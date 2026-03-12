import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  classroomChecklist,
  classroomCourses,
  classroomSupportNotes,
} from "@/data/classroom";

export default function ClassroomPage() {
  return (
    <PageShell
      eyebrow="Google Classroom"
      title="Google Classroom"
      description="Usa esta página solo para entrar a tus clases y saber qué hacer si tienes un problema de acceso."
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="brand-panel p-6 sm:p-8">
          <p className="eyebrow text-brand-100">Uso principal</p>
          <h2 className="mt-3 font-display text-3xl text-white">Aquí entras a tus clases</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-50">
            Si ya eres alumno, Google Classroom es tu punto de entrada para tareas, actividades, avisos y entregas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="#clases" variant="panel">
              Ver Acceso
            </ButtonLink>
            <ButtonLink href="/ayuda" variant="panelSecondary">
              Tengo un Problema
            </ButtonLink>
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Antes de entrar</p>
          <div className="mt-4 space-y-3">
            {classroomChecklist.map((step, index) => (
              <div className="flex gap-3 rounded-2xl bg-brand-50/70 p-4" key={step}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-800 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-5" id="clases">
        <SectionHeading
          eyebrow="Acceso publicado"
          title="Entra con el acceso general disponible"
          description="Por ahora este es el acceso general publicado."
        />
        <div className="card divide-y divide-slate-200/80 overflow-hidden">
          {classroomCourses.map((course, index) => (
            <div
              className={`grid gap-3 px-5 py-4 md:grid-cols-[1fr_auto] md:items-center ${
                index % 2 === 0 ? "tint-brand" : "tint-mist"
              }`}
              key={course.title}
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-semibold text-brand-900">{course.title}</h3>
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                    {course.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-700">Código: {course.code}</p>
                <p className="mt-2 text-xs leading-6 text-slate-600">{course.note}</p>
              </div>
              <ButtonLink
                href={course.href}
                external={course.external}
                variant="secondary"
                disabled={course.linkStatus !== "available"}
              >
                Entrar
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-5">
        <SectionHeading
          eyebrow="Si algo falla"
          title="Revisa esto primero"
          description="Haz estas comprobaciones antes de pedir ayuda."
        />
        <div className="card divide-y divide-slate-200/80 overflow-hidden">
          {classroomSupportNotes.map((item, index) => (
            <div
              className={`px-5 py-4 ${index % 2 === 0 ? "tint-brand" : "tint-mist"}`}
              key={item.title}
            >
              <h3 className="text-base font-semibold text-brand-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
