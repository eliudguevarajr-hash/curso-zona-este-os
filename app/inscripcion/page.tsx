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
      description="Aquí está concentrado todo el proceso: pasos, formularios, solicitud y documentos."
    >
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="brand-panel p-6 sm:p-8">
          <p className="eyebrow text-brand-100">Ruta principal</p>
          <h2 className="mt-3 font-display text-3xl text-white">Sigue este orden</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-50">
            1. Registro de Aspirante. 2. Diagnósticos cuando se habiliten. 3. Solicitud de Inscripción. 4. Documentos para matrícula.
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
          <p className="eyebrow">Dirigido a</p>
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
          title="Estado de formularios"
          description="Aquí ves qué formularios ya están habilitados y cuáles siguen pendientes."
        />
        <div className="card divide-y divide-slate-200/80 overflow-hidden">
          {processForms.map((form, index) => (
            <div
              className={`grid gap-3 px-5 py-4 md:grid-cols-[1fr_auto] md:items-center ${
                index % 2 === 0 ? "tint-brand" : "tint-mist"
              }`}
              key={form.title}
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-semibold text-brand-900">{form.title}</h3>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                      form.status === "available" ? "bg-brand-100 text-brand-700" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {form.status === "available" ? "Disponible" : "Pendiente"}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-700">{form.description}</p>
                <p className="mt-2 text-xs leading-6 text-slate-600">{form.note}</p>
              </div>
              <ButtonLink
                href={form.href ?? "/calendario"}
                external={form.external}
                variant="secondary"
                disabled={form.status !== "available"}
              >
                {form.status === "available" ? "Abrir" : "Pendiente"}
              </ButtonLink>
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
        <div className="card p-6 sm:p-8 tint-mist">
          <p className="eyebrow">Notas importantes</p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
            {registrationNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
