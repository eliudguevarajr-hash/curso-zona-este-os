import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { DocumentsCard } from "@/components/ui/documents-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stepper } from "@/components/ui/stepper";
import {
  processForms,
  registrationNotes,
  registrationSteps,
  requiredDocuments,
} from "@/data/inscripcion";
import { convocatoriaAudience, outcomeNotes } from "@/data/convocatoria";

export default function InscripcionPage() {
  return (
    <PageShell
      eyebrow="Inscripción"
      title="Inscripción y Matrícula"
      description="Aquí está concentrado todo el proceso: quién puede participar, formularios, solicitud y documentos."
    >
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="brand-panel p-6 sm:p-8">
          <p className="eyebrow text-brand-100">Ruta principal</p>
          <h2 className="mt-3 font-display text-3xl text-white">Aquí comienza todo el proceso</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-50">
            Primero completa el Registro de Aspirante. Después, cuando se habilite la siguiente etapa, podrás abrir los diagnósticos oficiales. Luego revisa la Solicitud de Inscripción y prepara tus documentos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink
              href={processForms[0]?.href ?? "/inscripcion"}
              external={processForms[0]?.external}
              variant="panel"
            >
              Registro de Aspirante
            </ButtonLink>
            <ButtonLink href="#formularios" variant="panelSecondary">
              Ver Formularios
            </ButtonLink>
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Quiénes pueden participar</p>
          <p className="mt-4 text-sm leading-7 text-slate-700">{convocatoriaAudience}</p>
        </div>
      </section>

      <section className="mt-10 space-y-5">
        <SectionHeading
          eyebrow="Pasos"
          title="Hazlo en este orden"
          description="No necesitas memorizar el sitio. Solo sigue estos pasos."
        />
        <Stepper steps={registrationSteps} />
      </section>

      <section className="mt-10 space-y-5" id="formularios">
        <SectionHeading
          eyebrow="Formularios"
          title="Abre el formulario correcto"
          description="Aquí ves qué formularios ya están habilitados y cuáles siguen pendientes."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processForms.map((form, index) => (
            <div
              className={`card p-5 ${index === 1 ? "tint-mist" : index === 2 ? "tint-sage" : "tint-brand"}`}
              key={form.title}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-brand-900">{form.title}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    form.status === "available" ? "bg-brand-100 text-brand-700" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {form.status === "available" ? "Disponible" : "Pendiente"}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-700">{form.description}</p>
              <p className="mt-3 text-xs leading-6 text-slate-600">{form.note}</p>
              <div className="mt-5">
                <ButtonLink
                  href={form.href ?? "/calendario"}
                  external={form.external}
                  variant="secondary"
                  disabled={form.status !== "available"}
                >
                  {form.status === "available" ? "Abrir" : "Pendiente"}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10" id="documentos">
        <DocumentsCard documents={requiredDocuments} />
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Resultado del curso</p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
            {outcomeNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {registrationNotes.map((note, index) => (
            <div className={`card p-5 ${index === 0 ? "tint-brand" : "tint-mist"}`} key={note}>
              <p className="text-sm leading-7 text-slate-700">{note}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
