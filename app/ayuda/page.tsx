import { PageShell } from "@/components/layout/page-shell";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { contacts, supportAreas } from "@/data/contacts";
import { faqItems } from "@/data/faq";

export default function AyudaPage() {
  return (
    <PageShell
      eyebrow="Ayuda"
      title="Ayuda y Contacto"
      description="Aquí están tus contactos de Zona Este y las respuestas rápidas para dudas comunes."
    >
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="brand-panel p-6 sm:p-8">
          <p className="eyebrow-inverse">Equipo de apoyo Zona Este</p>
          <h2 className="mt-3 font-display text-3xl text-white">Contactos principales</h2>
          <p className="mt-4 text-sm leading-7 text-white/90">
            Si perteneces a Zona Este, estos son los contactos correctos para resolver tus dudas del proceso.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {contacts.map((contact) => (
              <div className="rounded-2xl border border-white/20 bg-white/20 p-5" key={contact.phone}>
                <p className="text-lg font-semibold text-white">{contact.name}</p>
                <p className="mt-1 text-sm text-white/85">{contact.role}</p>
                <a
                  className="mt-3 inline-block text-base font-semibold text-white underline underline-offset-4"
                  href={`tel:${contact.phone}`}
                >
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Te podemos ayudar con</p>
          <div className="mt-4 space-y-3">
            {supportAreas.map((area) => (
              <div className="rounded-2xl border border-line bg-brand-50/60 p-4" key={area.title}>
                <h3 className="text-base font-semibold text-brand-900">{area.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-5">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Respuestas rápidas"
          description="Si tu duda es común, probablemente la encuentres aquí."
        />
        <FAQAccordion items={faqItems} />
      </section>
    </PageShell>
  );
}
