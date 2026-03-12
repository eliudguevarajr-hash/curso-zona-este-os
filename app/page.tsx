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
        <div className="soft-panel overflow-hidden">
          <div className="surface-grid grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Centro oficial de informacion</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-brand-900 sm:text-6xl">
                {siteMeta.title}
              </h1>
              <p className="mt-4 text-xl text-brand-700">{siteMeta.subtitle}</p>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                Aqui encuentras solo lo necesario para avanzar sin confusion: que hacer, en que fecha, donde entrar y a quien contactar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/inscripcion">Iniciar inscripcion</ButtonLink>
                <ButtonLink href="/calendario" variant="secondary">Ver calendario</ButtonLink>
                <ButtonLink href="/classroom" variant="secondary">Ir a Classroom</ButtonLink>
                <ButtonLink href="/ayuda" variant="ghost">Necesito ayuda</ButtonLink>
              </div>
            </div>
            <div className="grid gap-4">
              {announcements.map((item) => (
                <AnnouncementBanner item={item} key={item.title} />
              ))}
              <div className="card grid gap-4 p-5 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Paso 1</p>
                  <p className="mt-2 text-sm font-medium text-brand-900">Solicita tu formato firmado</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Paso 2</p>
                  <p className="mt-2 text-sm font-medium text-brand-900">Completa el registro en linea</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Paso 3</p>
                  <p className="mt-2 text-sm font-medium text-brand-900">Reune tus documentos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell mt-16 space-y-6">
        <SectionHeading
          eyebrow="Ruta rapida"
          title="Que debo hacer ahora"
          description="Selecciona tu situacion actual y entra directamente al siguiente paso correcto."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {roleCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="container-shell mt-16 space-y-6">
        <SectionHeading
          eyebrow="Proceso"
          title="Resumen simple del proceso"
          description="Este es el recorrido completo del aspirante desde convocatoria hasta inicio de clases."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summaryCards.slice(0, 4).map((card) => (
            <InfoCard key={card.title} {...card} accent="bg-brand-500" />
          ))}
        </div>
      </section>

      <section className="container-shell mt-16 space-y-6">
        <SectionHeading
          eyebrow="Fechas"
          title="Fechas que debes tener presentes"
          description="Las siguientes fechas son las mas importantes para registrantes y alumnos."
        />
        <KeyDates items={keyDates.slice(0, 6)} />
      </section>

      <section className="container-shell mt-16 space-y-6">
        <SectionHeading
          eyebrow="Ubicacion de actividades"
          title="Donde se hace cada cosa"
          description="Cada plataforma tiene una funcion especifica. Esta separacion evita confusion."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {processCards.map((card) => (
            <InfoCard key={card.title} title={card.title} description={card.description} href={card.href} accent="bg-warning" />
          ))}
        </div>
      </section>

      <section className="container-shell mt-16 space-y-6">
        <SectionHeading
          eyebrow="Acceso rapido"
          title="Enlaces principales"
          description="Estos accesos concentran lo que mas se necesita durante el proceso."
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
          title="Usa este portal como punto central"
          description="Este sitio organiza informacion y accesos. Classroom es para tareas y entregas. Zoom es para reuniones. Forms y Drive se usan solo cuando sea necesario."
          actions={[
            { label: "Iniciar inscripcion", href: "/inscripcion" },
            { label: "Ir a Classroom", href: "/classroom" },
            { label: "Ver ayuda", href: "/ayuda" },
          ]}
        />
      </section>
    </div>
  );
}
