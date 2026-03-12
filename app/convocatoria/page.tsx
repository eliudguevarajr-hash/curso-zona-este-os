import { PageShell } from "@/components/layout/page-shell";
import { CtaPanel } from "@/components/ui/cta-panel";
import { InfoCard } from "@/components/ui/info-card";
import { KeyDates } from "@/components/ui/key-dates";
import { SectionHeading } from "@/components/ui/section-heading";
import { convocatoriaAudience, convocatoriaSections, outcomeNotes, processCards } from "@/data/convocatoria";
import { keyDates } from "@/data/courses";

export default function ConvocatoriaPage() {
  return (
    <PageShell
      eyebrow="Convocatoria oficial"
      title="Convocatoria / Curso de Capacitación Ministerial 2026"
      description="Información general sobre el propósito de la convocatoria, quiénes pueden participar y cómo se desarrolla el proceso."
    >
      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Dirigido a</p>
          <p className="mt-4 text-base leading-8 text-slate-700">{convocatoriaAudience}</p>
        </div>
        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Fechas clave</p>
          <h3 className="mt-3 font-display text-3xl text-brand-900">Ventana principal</h3>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <p><span className="font-semibold text-ink">Convocatoria:</span> 05 al 28 de marzo de 2026</p>
            <p><span className="font-semibold text-ink">Inicio de clases:</span> 03 de mayo de 2026</p>
            <p><span className="font-semibold text-ink">Prórroga:</span> No hay prórroga</p>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading eyebrow="Información principal" title="Aspectos que todo aspirante debe conocer" description="La convocatoria establece un proceso ordenado y acompañado por el Departamento Educativo." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {convocatoriaSections.map((section) => (
            <InfoCard key={section.title} title={section.title} description={section.content} accent="bg-brand-600" />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Resultado del curso</p>
          <h3 className="mt-2 font-display text-3xl text-brand-900">Importancia del certificado y promedio final</h3>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            {outcomeNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Examen y entrevista</p>
          <div className="mt-4 grid gap-4">
            {processCards.map((card) => (
              <InfoCard key={card.title} title={card.title} description={card.description} href={card.href} accent="bg-warning" />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading eyebrow="Calendario" title="Fechas principales del proceso formativo" description="Estas fechas sirven como guía general para el seguimiento de la convocatoria y las materias del curso." />
        <KeyDates items={keyDates.slice(0, 8)} />
      </section>

      <section className="mt-12">
        <CtaPanel
          title="Continúa con tu inscripción"
          description="Si ya verificaste que puedes participar, el siguiente paso es solicitar tu formato firmado e iniciar el registro en línea."
          actions={[
            { label: "Ver Inscripción", href: "/inscripcion" },
            { label: "Abrir Registro en Línea", href: "https://example.com/registro", external: true },
          ]}
        />
      </section>
    </PageShell>
  );
}
