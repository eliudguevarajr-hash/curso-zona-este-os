import { AnnouncementBanner } from "@/components/ui/announcement-banner";
import { ButtonLink } from "@/components/ui/button-link";
import { CtaPanel } from "@/components/ui/cta-panel";
import { InfoCard } from "@/components/ui/info-card";
import { KeyDates } from "@/components/ui/key-dates";
import { SectionHeading } from "@/components/ui/section-heading";
import { processCards } from "@/data/convocatoria";
import { keyDates } from "@/data/courses";
import { roleCards, summaryCards } from "@/data/home";
import { announcements, quickLinks, siteMeta } from "@/data/site";

export default function HomePage() {
  return (
    <div className="pb-8">
      <section className="container-shell pt-8 sm:pt-12">
        <div className="card overflow-hidden">
          <div className="grid gap-10 bg-soft-grid bg-[size:22px_22px] px-6 py-10 sm:px-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Portal oficial de información</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-brand-900 sm:text-6xl">
                {siteMeta.title}
              </h1>
              <p className="mt-4 text-xl text-brand-700">{siteMeta.subtitle}</p>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                Bienvenido al centro oficial de información y orientación para la Convocatoria y Curso de Capacitación Ministerial 2026.
                Aquí encontrarás pasos, fechas, materias, accesos y contactos para dar seguimiento claro al proceso.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/convocatoria">Ver Convocatoria</ButtonLink>
                <ButtonLink href="/inscripcion" variant="secondary">Iniciar Inscripción</ButtonLink>
                <ButtonLink href="/materias" variant="secondary">Ver Materias</ButtonLink>
                <ButtonLink href="/classroom" variant="secondary">Ir a Google Classroom</ButtonLink>
                <ButtonLink href="/calendario" variant="ghost">Ver Calendario</ButtonLink>
              </div>
            </div>
            <div className="space-y-4">
              {announcements.map((item) => (
                <AnnouncementBanner item={item} key={item.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell mt-16 space-y-6">
        <SectionHeading
          eyebrow="Siguiente paso"
          title="¿Qué debo hacer ahora?"
          description="Selecciona la ruta que mejor describa tu situación actual para encontrar la orientación adecuada."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {roleCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="container-shell mt-16 space-y-6">
        <SectionHeading
          eyebrow="Resumen"
          title="Panorama general del proceso"
          description="Estos son los elementos principales que todo aspirante o alumno debe ubicar desde el inicio."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {summaryCards.map((card) => (
            <InfoCard key={card.title} {...card} accent="bg-brand-500" />
          ))}
        </div>
      </section>

      <section className="container-shell mt-16 space-y-6">
        <SectionHeading
          eyebrow="Fechas importantes"
          title="Próximas fechas clave"
          description="Consulta las ventanas principales de convocatoria, inicio de clases y el desarrollo general del curso."
        />
        <KeyDates items={keyDates.slice(0, 6)} />
      </section>

      <section className="container-shell mt-16 space-y-6">
        <SectionHeading
          eyebrow="Evaluaciones y orientación"
          title="Etapas complementarias del proceso"
          description="Además del registro y la entrega de documentos, el aspirante debe dar seguimiento a las actividades de evaluación y orientación."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {processCards.map((card) => (
            <InfoCard key={card.title} title={card.title} description={card.description} href={card.href} accent="bg-warning" />
          ))}
        </div>
      </section>

      <section className="container-shell mt-16 space-y-6">
        <SectionHeading
          eyebrow="Acceso rápido"
          title="Enlaces de uso frecuente"
          description="Accede directamente a los servicios y secciones más consultados por los participantes."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quickLinks.map((link) => (
            <div className="card p-5" key={link.title}>
              <h3 className="text-lg font-semibold text-brand-900">{link.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{link.description}</p>
              <div className="mt-4">
                <ButtonLink external={link.external} href={link.href} variant="secondary">Abrir</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell mt-16">
        <CtaPanel
          title="Mantén claro dónde se realiza cada actividad"
          description="Este portal organiza la información general. Google Classroom se utiliza para tareas y entregas; Zoom para reuniones en vivo; Google Forms para registros y solicitudes; Google Drive para archivos y recursos cuando sea necesario."
          actions={[
            { label: "Ver Classroom", href: "/classroom" },
            { label: "Ver Reuniones", href: "/reuniones" },
            { label: "Abrir Registro", href: "https://example.com/registro", external: true },
          ]}
        />
      </section>
    </div>
  );
}
