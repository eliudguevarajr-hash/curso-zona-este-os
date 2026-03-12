import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { CtaPanel } from "@/components/ui/cta-panel";
import { DocumentsCard } from "@/components/ui/documents-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stepper } from "@/components/ui/stepper";
import { registrationCtas, registrationSteps, requiredDocuments } from "@/data/inscripcion";

export default function InscripcionPage() {
  return (
    <PageShell eyebrow="Proceso de inscripción" title="Inscripción y matriculación" description="Sigue este flujo paso a paso para realizar tu registro, reunir tus documentos y continuar correctamente en el proceso.">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Stepper steps={registrationSteps} />
        </div>
        <div className="space-y-6">
          <div className="card p-6">
            <p className="eyebrow">Acciones inmediatas</p>
            <div className="mt-5 flex flex-col gap-3">
              {registrationCtas.map((cta) => (
                <ButtonLink key={cta.label} href={cta.href} external={cta.external} variant="secondary">{cta.label}</ButtonLink>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <p className="eyebrow">Nota importante</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Si tienes preguntas sobre el registro en línea, comunícate con el Responsable del Departamento Educativo de tu zona.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading eyebrow="Después del registro" title="Preparación del expediente físico" description="Una vez concluido el registro en línea, el siguiente paso es comenzar la integración ordenada de los documentos físicos requeridos para la matriculación." />
        <div className="card p-6 sm:p-8">
          <p className="text-sm leading-7 text-slate-600">
            No conviene esperar al final de la convocatoria para buscar documentos. Lo recomendable es reunirlos de inmediato, verificar que estén legibles y mantener contacto con el Departamento Educativo para confirmar cualquier situación especial.
          </p>
        </div>
      </section>

      <section className="mt-12" id="documentos">
        <DocumentsCard documents={requiredDocuments} />
      </section>

      <section className="mt-12">
        <CtaPanel
          title="Completa el proceso con orden"
          description="Primero obtén tu solicitud firmada, luego realiza el registro en línea y prepara todos los documentos para evitar retrasos en la matriculación."
          actions={[
            { label: "Abrir Registro", href: "https://example.com/registro", external: true },
            { label: "Solicitar ayuda", href: "/ayuda" },
          ]}
        />
      </section>
    </PageShell>
  );
}
