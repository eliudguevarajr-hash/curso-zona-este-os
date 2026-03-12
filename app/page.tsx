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
              <p className="eyebrow">Centro oficial de informacion</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-brand-900 sm:text-6xl">
                {siteMeta.title}
              </h1>
              <p className="mt-4 text-xl text-brand-700">{siteMeta.subtitle}</p>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                Aqui encuentras solo lo necesario para avanzar sin confusion: que hacer ahora, donde entrar y a quien contactar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/inscripcion">Iniciar inscripcion</ButtonLink>
                <ButtonLink href="/classroom" variant="secondary">Ir a Classroom</ButtonLink>
                <ButtonLink href="/calendario" variant="ghost">Ver calendario</ButtonLink>
              </div>
            </div>
            <div className="grid gap-4">
              {announcements.map((item) => (
                <AnnouncementBanner item={item} key={item.title} />
              ))}
              <div className="card p-5">
                <p className="eyebrow">Ruta inmediata</p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl bg-brand-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Paso 1</p>
                    <p className="mt-1 text-sm font-medium text-brand-900">Solicita tu formato firmado en tu localidad</p>
                  </div>
                  <div className="rounded-2xl bg-brand-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Paso 2</p>
                    <p className="mt-1 text-sm font-medium text-brand-900">Completa el registro en linea</p>
                  </div>
                  <div className="rounded-2xl bg-brand-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Paso 3</p>
                    <p className="mt-1 text-sm font-medium text-brand-900">Reune y entrega tus documentos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell mt-12 space-y-5">
        <SectionHeading
          eyebrow="Elige una opcion"
          title="Que necesitas hacer"
          description="Cada persona debe poder elegir una sola ruta y avanzar sin leer todo el sitio."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {roleCards.map((card) => (
            <InfoCard key={card.title} {...card} />
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
          title="Donde debes entrar"
          description="Cada plataforma tiene una sola funcion. Esta parte debe sentirse directa y evidente."
        />
        <div className="card divide-y divide-slate-200/80 overflow-hidden">
          {platformCards.map((card) => (
            <div className="grid gap-3 px-5 py-4 md:grid-cols-[180px_1fr_auto] md:items-center" key={card.title}>
              <h3 className="text-base font-semibold text-brand-900">{card.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{card.description}</p>
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
          description="Para la mayoria de los usuarios, el siguiente paso correcto casi siempre sera inscripcion, calendario, Classroom o ayuda."
          actions={[
            { label: "Iniciar inscripcion", href: "/inscripcion" },
            { label: "Ver documentos", href: "/inscripcion#documentos" },
            { label: "Ir a Classroom", href: "/classroom" },
            { label: "Ver ayuda", href: "/ayuda" },
          ]}
        />
      </section>
    </div>
  );
}
