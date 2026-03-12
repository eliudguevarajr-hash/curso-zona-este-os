import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { CtaPanel } from "@/components/ui/cta-panel";
import { DocumentsCard } from "@/components/ui/documents-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stepper } from "@/components/ui/stepper";
import {
  processForms,
  registrationNotes,
  registrationSteps,
  requiredDocuments,
} from "@/data/inscripcion";

export default function InscripcionPage() {
  return (
    <PageShell
      eyebrow="Inscripción"
      title="Inscripción y Matrícula"
      description="Sigue este orden. Si completas estos pasos, sabrás exactamente qué hacer y qué abrir en cada momento."
    >
      <section className="brand-panel p-6 sm:p-8">
        <p className="eyebrow text-brand-100">Ruta principal</p>
        <h2 className="mt-3 font-display text-3xl text-white">Aquí comienza todo el proceso</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-50">
          Primero completa el Registro de Aspirante. Después abre los dos diagnósticos oficiales. Luego revisa la Solicitud de Inscripción y prepara tus documentos.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={processForms[0]?.href ?? "/inscripcion"} external={processForms[0]?.external} variant="panel">
            Registro de Aspirante
          </ButtonLink>
          <ButtonLink href="#formularios" variant="panelSecondary">
            Ver Formularios
          </ButtonLink>
        </div>
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Pasos"
          title="Hazlo en este orden"
          description="No necesitas memorizar el sitio. Solo sigue estos pasos."
        />
        <Stepper steps={registrationSteps} />
      </section>

      <section className="mt-12 space-y-5" id="formularios">
        <SectionHeading
          eyebrow="Formularios Oficiales"
          title="Abre el formulario correcto"
          description="Aquí están reunidos los formularios oficiales y el siguiente paso de entrevista."
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
                  {form.status === "available" ? "Abrir" : "Pendiente"}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12" id="documentos">
        <DocumentsCard documents={requiredDocuments} />
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Importante"
          title="Lo que no debes olvidar"
          description="Estas notas evitan atrasos y ayudan a mantener el proceso claro."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {registrationNotes.map((note, index) => (
            <div className={`card p-5 ${index === 0 ? "tint-brand" : "tint-sage"}`} key={note}>
              <p className="text-sm leading-7 text-slate-700">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <CtaPanel
          title="Después de Inscripción, usa solo lo que te corresponda"
          description="Si ya terminaste el proceso inicial, lo siguiente normalmente será revisar documentos, esperar indicaciones de entrevista o entrar a Classroom cuando ya seas alumno."
          actions={[
            { label: "Ver Documentos", href: "/inscripcion#documentos" },
            { label: "Ir a Classroom", href: "/classroom" },
            { label: "Pedir Ayuda", href: "/ayuda" },
          ]}
        />
      </section>
    </PageShell>
  );
}
