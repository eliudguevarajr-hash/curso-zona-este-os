import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  classroomAccess,
  classroomChecklist,
  classroomSubjects,
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
          <p className="eyebrow-inverse">Uso principal</p>
          <h2 className="mt-3 font-display text-2xl text-white sm:text-3xl">Aquí entras a tus clases</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">
            Classroom se usa para tareas, actividades, materiales y avisos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink className="w-full sm:w-auto" href={classroomAccess.href} external={classroomAccess.external} variant="panel">
              Entrar a Classroom
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href="/ayuda" variant="panelSecondary">
              Tengo un Problema
            </ButtonLink>
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Qué hacer ahí</p>
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

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <SectionHeading
            eyebrow="Materias"
            title="Materias incluidas"
            description="Estas son las materias atendidas con el acceso general."
          />
          <div className="card p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {classroomSubjects.map((subject) => (
                <div className="rounded-2xl border border-line bg-brand-50/60 px-4 py-3" key={subject}>
                  <p className="text-sm font-semibold text-brand-900">{subject}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
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
        </div>
      </section>
    </PageShell>
  );
}
