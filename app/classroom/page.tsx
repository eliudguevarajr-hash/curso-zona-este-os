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
          <h2 className="mt-3 font-display text-3xl text-brand-900">Sigue estas acciones</h2>
          <div className="mt-5 space-y-3">
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

      <section className="mt-12 space-y-5" id="clases">
        <SectionHeading
          eyebrow="Acceso publicado"
          title="Entra con el acceso general disponible"
          description="Por ahora este es el acceso general publicado. Si más adelante se publican accesos por materia, se actualizarán aquí."
        />
        <div className="card divide-y divide-slate-200/80 overflow-hidden">
          {classroomCourses.map((course, index) => (
            <div
              className={`grid gap-3 px-5 py-4 md:grid-cols-[1.2fr_150px_170px_auto] md:items-center ${
                index % 3 === 0 ? "tint-brand" : index % 3 === 1 ? "tint-gold" : "tint-sage"
              }`}
              key={course.title}
            >
              <div>
                <h3 className="text-base font-semibold text-brand-900">{course.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-700">{course.status}</p>
              </div>
              <p className="text-sm text-slate-700">Código: {course.code}</p>
              <p className="text-sm text-slate-700">Acceso de materia</p>
              <div>
                <ButtonLink
                  href={course.href}
                  external={course.external}
                  variant="secondary"
                  disabled={course.linkStatus !== "available"}
                >
                  Entrar
                </ButtonLink>
              </div>
              <div className="md:col-span-4">
                <p className="text-xs leading-6 text-slate-600">{course.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Si algo falla"
          title="Haz esto antes de pedir ayuda"
          description="Solo revisa estas indicaciones y luego contacta soporte si el problema continúa."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {classroomSupportNotes.map((item) => (
            <div className="card p-5" key={item.title}>
              <h3 className="text-lg font-semibold text-brand-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
