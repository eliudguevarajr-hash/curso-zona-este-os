import Link from "next/link";

import { contacts } from "@/data/contacts";
import { footerLinks } from "@/data/site";
import { SiteLogo } from "../ui/site-logo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-brand-wash text-white">
      <div className="container-shell grid gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] xl:grid-cols-[minmax(0,0.92fr)_0.58fr_minmax(0,0.9fr)]">
        <div className="min-w-0 lg:pr-2">
          <SiteLogo variant="footer" />
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/90">
            Portal oficial de información para la Convocatoria y Curso de Capacitación Ministerial 2026.
          </p>
        </div>

        <div className="min-w-0 lg:col-span-2 xl:col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Secciones</h3>
          <div className="mt-3 grid gap-1.5">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                className="rounded-lg px-1 py-1 text-sm text-white/90 underline decoration-transparent underline-offset-4 hover:text-white hover:decoration-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Contactos Zona Este</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {contacts.map((contact) => (
              <div key={contact.phone} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <p className="text-sm font-semibold text-white">{contact.name}</p>
                <p className="mt-1 text-xs text-white/75">{contact.role}</p>
                <a
                  className="mt-2 inline-block text-sm text-white/90 underline decoration-transparent underline-offset-4 hover:text-white hover:decoration-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                  href={`tel:${contact.phone}`}
                >
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell py-3 text-xs text-white/85">
          © 2026 Departamento Educativo: Zona Este. Sitio informativo oficial de la Convocatoria 2026.
        </div>
      </div>
    </footer>
  );
}
