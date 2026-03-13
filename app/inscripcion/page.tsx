import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { DocumentsCard } from "@/components/ui/documents-card";
import { ProcessStatusBanner } from "@/components/ui/process-status-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { registrationNotes, requiredDocuments } from "@/data/inscripcion";
import { processSequence } from "@/data/process";

export default function InscripcionPage() {
  return (
    <PageShell
      eyebrow="Inscripción"
      title="Inscripción y Matrícula"
      description="Aquí está el camino del proceso, en orden y sin pasos ocultos."
    >
      <ProcessStatusBanner />

      <section className="mt-10 brand-panel p-6 sm:p-8">
        <p className="eyebrow-inverse">Paso actual</p>
        <h2 className="mt-3 font-display text-3xl text-white">Haz solo el paso que está abierto</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90">
          Por ahora solo debes completar el Registro de Aspirante y preparar tu documentación.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={processSequence[1].href} external={processSequence[1].external} variant="panel">
            Abrir Registro
          </ButtonLink>
          <ButtonLink href="#pasos" variant="panelSecondary">
            Ver Camino
          </ButtonLink>
        </div>
      </section>

      <section className="mt-10 space-y-5" id="pasos">
        <SectionHeading
          eyebrow="Camino"
          title="Sigue estos cuatro pasos"
          description="Haz solo el paso que ya está disponible."
        />
        <div className="card divide-y divide-slate-200/80 overflow-hidden">
          {processSequence.map((item, index) => (
            <div
              className={`grid gap-3 px-5 py-4 md:grid-cols-[110px_1fr_auto] md:items-center ${
                index % 2 === 0 ? "tint-brand" : "tint-mist"
              }`}
              key={item.title}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{item.step}</p>
                <span
                  className={`mt-2 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    item.status === "available" ? "bg-brand-100 text-brand-700" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {item.status === "available" ? "Disponible" : "Pendiente"}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              </div>
              <ButtonLink
                href={item.href}
                external={item.external}
                variant="secondary"
                disabled={item.status !== "available"}
              >
                {item.buttonLabel}
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10" id="documentos">
        <DocumentsCard documents={requiredDocuments} />
      </section>

      <section className="mt-10">
        <div className="card p-6 sm:p-8 tint-mist">
          <p className="eyebrow">Notas importantes</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            {registrationNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
