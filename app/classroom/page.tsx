import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { CtaPanel } from "@/components/ui/cta-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  classroomChecklist,
  classroomCourses,
  classroomSupportNotes,
  classroomUsage,
} from "@/data/classroom";

export default function ClassroomPage() {
  return (
    <PageShell
      eyebrow="Google Classroom"
      title="Google Classroom"
      description="Classroom es la plataforma oficial para tareas, entregas y seguimiento de cada materia. Este sitio solo orienta y organiza los accesos."
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="brand-panel p-6 sm:p-8">
          <p className="eyebrow text-brand-100">Uso principal</p>
          <h2 className="mt-3 font-display text-3xl text-white">Aqui se hacen las tareas y entregas</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-50">
            Si ya eres alumno, Google Classroom debe ser tu punto de entrada para revisar actividades, avisos y entregas de cada materia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="#clases" className="bg-white text-brand-900 hover:bg-brand-50">
              Ver Clases
            </ButtonLink>
            <ButtonLink href="/ayuda" variant="secondary" className="border-white/35 bg-white/15 text-white hover:bg-white/25">
              Necesito Ayuda
            </ButtonLink>
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Antes de entrar</p>
          <h2 className="mt-3 font-display text-3xl text-brand-900">Revisa estas cuatro acciones</h2>
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

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Funcion de Classroom"
          title="Que debes hacer aqui"
          description="Esta pagina debe resolver de inmediato para que sirve Classroom y que no debes buscar aqui."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {classroomUsage.map((item, index) => (
            <div className={`card p-5 ${index === 1 ? "tint-gold" : index === 2 ? "tint-sage" : "tint-brand"}`} key={item.title}>
              <h3 className="text-lg font-semibold text-brand-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-5" id="clases">
        <SectionHeading
          eyebrow="Clases Disponibles"
          title="Entra a tu materia"
          description="La lista de accesos debe sentirse directa. Solo busca tu materia y entra."
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
              <p className="text-sm text-slate-700">Codigo: {course.code}</p>
              <p className="text-sm text-slate-700">Acceso de materia</p>
              <div>
                <ButtonLink href={course.href} external variant="secondary">
                  Entrar
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Problemas Comunes"
          title="Si algo no funciona"
          description="La ayuda debe estar visible sin obligar al alumno a leer bloques largos."
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

      <section className="mt-12">
        <CtaPanel
          title="Este portal no reemplaza Classroom"
          description="Usa este sitio para orientarte. Usa Google Classroom para entrar a tu materia, revisar actividades y realizar entregas."
          actions={[
            { label: "Ver Ayuda", href: "/ayuda" },
            { label: "Ver Recursos", href: "/recursos" },
          ]}
        />
      </section>
    </PageShell>
  );
}
