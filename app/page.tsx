import { AnnouncementBanner } from "@/components/ui/announcement-banner";
import { ButtonLink } from "@/components/ui/button-link";
import { CtaPanel } from "@/components/ui/cta-panel";
import { InfoCard } from "@/components/ui/info-card";
import { KeyDates } from "@/components/ui/key-dates";
import { SectionHeading } from "@/components/ui/section-heading";
import { keyDates } from "@/data/courses";
import { roleCards } from "@/data/home";
import { announcements, quickLinks, siteMeta } from "@/data/site";

export default function HomePage() {
  const routeAccents = ["bg-brand-500", "bg-gold-400", "bg-sage-400", "bg-brand-800"];
  const platformCards = [
    {
      title: "Este sitio web",
      description: "Pasos, fechas, materias, recursos y contactos oficiales.",
      href: "/convocatoria",
    },
    {
      title: "Google Classroom",
      description: "Tareas, actividades y avisos de clase.",
      href: "/classroom",
    },
    {
      title: "Zoom",
      description: "Reuniones informativas y sesiones en vivo.",
      href: "/reuniones",
    },
    {
      title: "Formularios y Drive",
      description: "Registros, formatos y carpetas de apoyo.",
      href: "/recursos",
    },
  ];

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
                Aquí encuentras solo lo necesario para avanzar sin confusión: qué hacer ahora, dónde entrar y a quién contactar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/inscripcion">Iniciar inscripción</ButtonLink>
                <ButtonLink href="/classroom" variant="secondary">Ir a Classroom</ButtonLink>
                <ButtonLink href="/calendario" variant="ghost">Ver calendario</ButtonLink>
              </div>
            </div>
            <div className="grid gap-4">
              {announcements.map((item) => (
                <AnnouncementBanner item={item} key={item.title} />
              ))}
              <div className="brand-panel p-5">
                <p className="eyebrow text-brand-100">Ruta inmediata</p>
                <div className="mt-4 grid gap-3">
                  <div className="panel-step">
                    <p className="panel-step-kicker">Paso 1</p>
                    <p className="panel-step-copy">Solicita tu formato firmado en tu localidad</p>
                  </div>
                  <div className="panel-step">
                    <p className="panel-step-kicker">Paso 2</p>
                    <p className="panel-step-copy">Completa el registro en línea</p>
                  </div>
                  <div className="panel-step">
                    <p className="panel-step-kicker">Paso 3</p>
                    <p className="panel-step-copy">Reúne y entrega tus documentos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell mt-12 space-y-5">
        <SectionHeading
          eyebrow="Elige una opción"
          title="Qué necesitas hacer"
          description="Cada persona debe poder elegir una sola ruta y avanzar sin leer todo el sitio."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {roleCards.map((card, index) => (
            <InfoCard key={card.title} {...card} accent={routeAccents[index] ?? "bg-brand-500"} />
          ))}
        </div>
      </section>

      <section className="container-shell mt-12 space-y-5">
        <SectionHeading
          eyebrow="Fechas"
          title="Fechas que debes tener presentes"
          description="Si solo vas a revisar una cosa antes de salir del portal, que sean estas fechas."
        />
        <KeyDates items={keyDates.slice(0, 4)} />
      </section>

      <section className="container-shell mt-12 space-y-5">
        <SectionHeading
          eyebrow="Plataformas"
          title="Dónde debes entrar"
          description="Cada plataforma tiene una sola función. Esta parte debe sentirse directa y evidente."
        />
        <div className="card divide-y divide-slate-200/80 overflow-hidden">
          {platformCards.map((card, index) => (
            <div
              className={`grid gap-3 px-5 py-4 md:grid-cols-[180px_1fr_auto] md:items-center ${
                index % 2 === 0 ? "tint-brand" : "tint-gold"
              }`}
              key={card.title}
            >
              <h3 className="text-base font-semibold text-brand-900">{card.title}</h3>
              <p className="text-sm leading-7 text-slate-700">{card.description}</p>
              <div>
                <ButtonLink href={card.href} variant="secondary">Entrar</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell mt-12">
        <CtaPanel
          title="Si tienes duda, entra por una sola ruta"
          description="Para la mayoría de los usuarios, el siguiente paso correcto casi siempre será inscripción, calendario, Classroom o ayuda."
          actions={[
            { label: "Iniciar inscripción", href: "/inscripcion" },
            { label: "Ver documentos", href: "/inscripcion#documentos" },
            { label: "Ir a Classroom", href: "/classroom" },
            { label: "Ver ayuda", href: "/ayuda" },
          ]}
        />
      </section>
    </div>
  );
}
