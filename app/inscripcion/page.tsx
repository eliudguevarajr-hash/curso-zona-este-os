import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { DocumentsCard } from "@/components/ui/documents-card";
import { ProcessStatusBanner } from "@/components/ui/process-status-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { registrationNotes, requiredDocuments } from "@/data/inscripcion";
import { managedLinks } from "@/data/links";
import { processSequence } from "@/data/process";

export default function InscripcionPage() {
  return (
    <PageShell
      eyebrow="Inscripción"
      title="Registro y Documentos"
      description="Haz este proceso en orden: primero regístrate y después sube tus documentos."
    >
      <ProcessStatusBanner />

      <section className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="brand-panel h-full p-5 sm:p-6 lg:p-8">
          <p className="eyebrow-inverse">Paso 1</p>
          <h2 className="mt-3 font-display text-2xl text-white sm:text-3xl">Primero completa tu registro</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90">
            Este es el primer paso obligatorio. Debes completar el formulario oficial para iniciar tu proceso.
          </p>
          <ButtonLink
            className="mt-6 w-full sm:w-auto"
            href={managedLinks.registrationForm.href}
            external={managedLinks.registrationForm.external}
            variant="panel"
          >
            Abrir Registro
          </ButtonLink>
        </div>

        <div className="card h-full p-5 sm:p-6 lg:p-8">
          <p className="eyebrow">Paso 2</p>
          <h2 className="mt-3 font-display text-2xl text-brand-900 sm:text-3xl">Después sube tus documentos</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
            Cuando termines el registro, usa el formulario de documentos. No lo dejes para otra etapa.
          </p>
          <p className="mt-3 text-sm font-medium text-brand-800">Haz este paso inmediatamente después del registro.</p>
          <ButtonLink
            className="mt-6 w-full sm:w-auto"
            href={managedLinks.documentUploadForm.href}
            external={managedLinks.documentUploadForm.external}
            variant="secondary"
          >
            Subir Documentos
          </ButtonLink>
        </div>
      </section>

      <section className="mt-8 space-y-5 sm:mt-10" id="pasos">
        <SectionHeading
          eyebrow="Camino"
          title="Este es el orden correcto"
          description="Sigue estos pasos tal como aparecen aquí."
        />
        <div className="card divide-y divide-slate-200/80 overflow-hidden">
          {processSequence.map((item, index) => (
            <div
              className={`grid gap-3 px-5 py-4 md:grid-cols-[100px_1fr_auto] md:items-center ${
                index === 0 ? "tint-brand" : index === 1 ? "tint-mist" : "bg-slate-50"
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
                  {item.status === "available" ? "Abierta actualmente" : "Pendiente"}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              </div>
              <ButtonLink
                className="w-full md:w-auto"
                href={item.href}
                external={item.external}
                variant={index === 0 ? "primary" : "secondary"}
                disabled={item.status !== "available"}
              >
                {item.buttonLabel}
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 sm:mt-10" id="documentos">
        <DocumentsCard
          documents={requiredDocuments}
          uploadHref={managedLinks.documentUploadForm.href}
          uploadExternal={managedLinks.documentUploadForm.external}
        />
      </section>

      <section className="mt-8 sm:mt-10">
        <div className="card p-5 sm:p-6 lg:p-8 tint-mist">
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
