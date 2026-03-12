import { AnnouncementBanner } from "@/components/ui/announcement-banner";
import { ButtonLink } from "@/components/ui/button-link";
import { CtaPanel } from "@/components/ui/cta-panel";
import { KeyDates } from "@/components/ui/key-dates";
import { SectionHeading } from "@/components/ui/section-heading";
import { keyDates } from "@/data/courses";
import { nextStepList, roleCards } from "@/data/home";
import { announcements, quickLinks, siteMeta } from "@/data/site";

export default function HomePage() {
  return (
    <div className="pb-8">
      <section className="container-shell pt-8 sm:pt-12">
        <div className="soft-panel overflow-hidden">
          <div className="surface-grid grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow">Centro oficial de información</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-brand-900 sm:text-6xl">
                {siteMeta.title}
              </h1>
              <p className="mt-4 text-xl text-brand-700">{siteMeta.subtitle}</p>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-700 sm:text-base">
                Este portal existe para que sepas qué hacer ahora, en qué orden seguir el proceso y dónde entrar sin confusión.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/inscripcion">Comenzar Proceso</ButtonLink>
                <ButtonLink href="/classroom" variant="secondary">Ir a Classroom</ButtonLink>
                <ButtonLink href="/ayuda" variant="ghost">Necesito Ayuda</ButtonLink>
              </div>
            </div>
            <div className="grid gap-4">
              {announcements.map((item) => (
                <AnnouncementBanner item={item} key={item.title} />
              ))}
              <div className="brand-panel p-5">
                <p className="eyebrow text-brand-100">Orden recomendado</p>
                <div className="mt-4 grid gap-3">
                  <div className="panel-step">
                    <p className="panel-step-kicker">Paso 1</p>
                    <p className="panel-step-copy">Abre el Registro de Aspirante</p>
                  </div>
                  <div className="panel-step">
                    <p className="panel-step-kicker">Paso 2</p>
                    <p className="panel-step-copy">Completa los diagnósticos oficiales</p>
                  </div>
                  <div className="panel-step">
                    <p className="panel-step-kicker">Paso 3</p>
                    <p className="panel-step-copy">Revisa solicitud, documentos y fechas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell mt-12 space-y-5">
        <SectionHeading
          eyebrow="Qué necesitas"
          title="Elige solo una ruta"
          description="La mayoría de las personas solo necesita una de estas tres rutas para continuar."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {roleCards.map((card, index) => (
            <div className={`card p-6 ${index === 1 ? "tint-gold" : index === 2 ? "tint-sage" : "tint-brand"}`} key={card.title}>
              <h3 className="text-xl font-semibold text-brand-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{card.description}</p>
              <div className="mt-5">
                <ButtonLink href={card.href} variant="secondary">
                  Continuar
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell mt-12 space-y-5">
        <SectionHeading
          eyebrow="Siguiente paso"
          title="Lo principal del proceso"
          description="No necesitas buscar en muchas páginas. Estas son las acciones más importantes."
        />
        <div className="card divide-y divide-slate-200/80 overflow-hidden">
          {nextStepList.map((item, index) => (
            <div
              className={`grid gap-3 px-5 py-4 md:grid-cols-[220px_1fr_auto] md:items-center ${
                index % 2 === 0 ? "tint-brand" : "tint-gold"
              }`}
              key={item.title}
            >
              <h3 className="text-base font-semibold text-brand-900">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-700">{item.description}</p>
              <ButtonLink href={item.href} variant="secondary">
                Abrir
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell mt-12 space-y-5">
        <SectionHeading
          eyebrow="Fechas clave"
          title="Solo estas fechas deben quedar claras"
          description="Si vas a recordar algo hoy, que sea esto."
        />
        <KeyDates items={keyDates.slice(0, 4)} />
      </section>

      <section className="container-shell mt-12 space-y-5">
        <SectionHeading
          eyebrow="Accesos oficiales"
          title="Abre directamente lo que ya está publicado"
          description="Aquí encuentras los accesos que hoy sí están disponibles."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quickLinks.map((item, index) => (
            <div className={`card p-5 ${index % 3 === 1 ? "tint-gold" : index % 3 === 2 ? "tint-sage" : "tint-brand"}`} key={item.title}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-brand-900">{item.title}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    item.status === "available" ? "bg-sage-100 text-sage-700" : "bg-gold-100 text-gold-700"
                  }`}
                >
                  {item.status === "available" ? "Disponible" : "Pendiente"}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
              {item.note ? <p className="mt-3 text-xs leading-6 text-slate-600">{item.note}</p> : null}
              <div className="mt-5">
                <ButtonLink
                  href={item.href}
                  external={item.external}
                  variant="secondary"
                  disabled={item.status !== "available"}
                >
                  {item.status === "available" ? "Abrir" : "Pendiente"}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell mt-12">
        <CtaPanel
          title="Si no sabes por dónde seguir, empieza en Inscripción"
          description="Ahí encontrarás el orden del proceso, los formularios oficiales, los documentos y lo que todavía falta por publicarse."
          actions={[
            { label: "Ir a Inscripción", href: "/inscripcion" },
            { label: "Ver Classroom", href: "/classroom" },
            { label: "Pedir Ayuda", href: "/ayuda" },
          ]}
        />
      </section>
    </div>
  );
}
