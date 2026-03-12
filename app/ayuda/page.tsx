import { PageShell } from "@/components/layout/page-shell";
import { ContactForm } from "@/components/ui/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { contacts, supportAreas } from "@/data/contacts";

export default function AyudaPage() {
  const primaryContact = contacts.find((contact) => contact.primary);
  const secondaryContacts = contacts.filter((contact) => !contact.primary);

  return (
    <PageShell
      eyebrow="Ayuda"
      title="Ayuda y contacto"
      description="Usa esta página solo cuando tengas una duda concreta sobre inscripción, documentos, Classroom o reuniones."
    >
      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="brand-panel p-6 sm:p-8">
          <p className="eyebrow text-brand-100">Contacto principal</p>
          <h2 className="mt-3 font-display text-3xl text-white">Zona Este</h2>
          <p className="mt-4 text-sm leading-7 text-brand-50">
            Si perteneces a Zona Este, este debe ser tu primer contacto para resolver dudas del proceso.
          </p>
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/15 p-5">
            <p className="text-lg font-semibold text-white">{primaryContact?.person}</p>
            <a className="mt-3 inline-block text-base font-semibold text-gold-100 underline underline-offset-4" href={`tel:${primaryContact?.phone}`}>
              {primaryContact?.phone}
            </a>
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Qué tipo de ayuda necesitas</p>
          <div className="mt-4 grid gap-3">
            {supportAreas.map((area, index) => (
              <div className={`rounded-2xl p-4 ${index % 2 === 0 ? "tint-brand" : "tint-gold"}`} key={area.title}>
                <h3 className="text-base font-semibold text-brand-900">{area.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Otros contactos"
          title="Contactos de otras zonas"
          description="Si no perteneces a Zona Este, usa el contacto correspondiente a tu zona."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {secondaryContacts.map((contact) => (
            <div className="card p-6" key={contact.phone}>
              <h3 className="text-lg font-semibold text-brand-900">{contact.zone}</h3>
              <p className="mt-2 text-sm text-slate-700">{contact.person}</p>
              <a className="action-link mt-4" href={`tel:${contact.phone}`}>
                {contact.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <ContactForm />
      </section>
    </PageShell>
  );
}
