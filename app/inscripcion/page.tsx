import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { CtaPanel } from "@/components/ui/cta-panel";
import { DocumentsCard } from "@/components/ui/documents-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stepper } from "@/components/ui/stepper";
import {
  processForms,
  registrationCtas,
  registrationNotes,
  registrationSteps,
  requiredDocuments,
} from "@/data/inscripcion";
import { managedLinks } from "@/data/links";

export default function InscripcionPage() {
  return (
    <PageShell
      eyebrow="Inscripción"
      title="Inscripción y Matriculación"
      description="Esta página debe ayudarte a completar el proceso en orden, sin confusión y sin perder ningún paso importante."
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="brand-panel p-6 sm:p-8">
          <p className="eyebrow text-brand-100">Empieza aquí</p>
          <h2 className="mt-3 font-display text-3xl text-white">Haz una sola cosa a la vez</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-50">
            Primero consigue tu solicitud firmada. Después completa el registro para aspirante y los diagnósticos oficiales. Luego prepara tu expediente físico.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink
              href={managedLinks.registrationForm.href}
              external={managedLinks.registrationForm.external}
              variant="panel"
              disabled={managedLinks.registrationForm.status !== "available"}
            >
              Registro de Aspirante
            </ButtonLink>
            <ButtonLink
              href={managedLinks.inscriptionRequestPdf.href}
              external={managedLinks.inscriptionRequestPdf.external}
              variant="panelSecondary"
              disabled={managedLinks.inscriptionRequestPdf.status !== "available"}
            >
              Ver Solicitud
            </ButtonLink>
          </div>
          <p className="mt-4 text-xs leading-6 text-brand-100">
            Registro disponible. Solicitud PDF y Zoom aún pendientes de publicación oficial.
          </p>
        </div>

        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Accesos rápidos</p>
          <div className="mt-4 grid gap-3">
            {registrationCtas.map((cta, index) => (
              <div className={`rounded-2xl p-4 ${index % 2 === 0 ? "tint-brand" : "tint-gold"}`} key={cta.label}>
                <ButtonLink
                  href={cta.href}
                  external={cta.external}
                  variant="secondary"
                  disabled={cta.status !== "available"}
                >
                  {cta.label}
                </ButtonLink>
                {cta.note ? <p className="mt-3 text-xs leading-6 text-slate-600">{cta.note}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Pasos"
          title="Completa estos pasos en orden"
          description="La página debe sentirse como una ruta simple de seguimiento y no como una lista larga de instrucciones."
        />
        <Stepper steps={registrationSteps} />
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Formularios Oficiales"
          title="Accede al formulario correcto en cada etapa"
          description="Los formularios ya publicados se pueden abrir desde aquí. La entrevista ministerial no requiere formulario."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processForms.map((form, index) => (
            <div className={`card p-5 ${index === 1 ? "tint-gold" : index === 2 ? "tint-sage" : "tint-brand"}`} key={form.title}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-brand-900">{form.title}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    form.status === "available" ? "bg-sage-100 text-sage-700" : "bg-gold-100 text-gold-700"
                  }`}
                >
                  {form.status === "available" ? "Disponible" : "Pendiente"}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-700">{form.description}</p>
              <p className="mt-3 text-xs leading-6 text-slate-600">{form.note}</p>
              <div className="mt-5">
                <ButtonLink
                  href={form.href ?? "/reuniones"}
                  external={form.external}
                  variant="secondary"
                  disabled={form.status !== "available"}
                >
                  {form.status === "available" ? "Abrir Formulario" : "Pendiente"}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Notas Importantes"
          title="Lo que no debes olvidar"
          description="Estas indicaciones ayudan a evitar retrasos o errores durante la matriculación."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {registrationNotes.map((note, index) => (
            <div className={`card p-5 ${index === 0 ? "tint-brand" : "tint-sage"}`} key={note}>
              <p className="text-sm leading-7 text-slate-700">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12" id="documentos">
        <DocumentsCard documents={requiredDocuments} />
      </section>

      <section className="mt-12">
        <CtaPanel
          title="Ya puedes iniciar con registro y diagnósticos"
          description="Registro de aspirante, diagnóstico vocacional y diagnóstico ministerial ya están publicados. Todavía faltan la solicitud oficial, la convocatoria PDF y los enlaces de Zoom."
          actions={[
            { label: "Registro de Aspirante", href: managedLinks.registrationForm.href, external: managedLinks.registrationForm.external },
            { label: "Diagnóstico Vocacional", href: managedLinks.vocationalDiagnosticForm.href, external: managedLinks.vocationalDiagnosticForm.external },
            { label: "Diagnóstico Ministerial", href: managedLinks.ministerialDiagnosticForm.href, external: managedLinks.ministerialDiagnosticForm.external },
            { label: "Ver Recursos", href: "/recursos" },
          ]}
        />
      </section>
    </PageShell>
  );
}
