import Link from "next/link";

import { contacts } from "@/data/contacts";
import { footerLinks } from "@/data/site";
import { SiteLogo } from "../ui/site-logo";

export function Footer() {
  const primaryContact = contacts.find((contact) => contact.primary);

  return (
    <footer className="mt-20 border-t border-line bg-brand-wash text-white">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.4fr_0.9fr_0.9fr]">
        <div>
          <SiteLogo variant="footer" />
          <p className="mt-4 max-w-xl text-sm leading-7 text-brand-50">
            Portal oficial de información para la Convocatoria y Curso de Capacitación Ministerial 2026.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-100">Secciones</h3>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                className="rounded-lg px-1 py-1 text-sm text-brand-50 underline decoration-transparent underline-offset-4 hover:text-white hover:decoration-gold-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-100">Contacto principal</h3>
          <div className="mt-4 space-y-2 text-sm">
            <p className="text-brand-50">{primaryContact?.role}</p>
            <p className="font-semibold text-white">{primaryContact?.name}</p>
            <a
              className="rounded-lg px-1 py-1 text-brand-50 underline decoration-transparent underline-offset-4 hover:text-white hover:decoration-gold-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              href={`tel:${primaryContact?.phone}`}
            >
              {primaryContact?.phone}
            </a>
            <p className="pt-2 text-brand-50">Si tienes duda, entra a la sección de Ayuda.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell py-4 text-xs text-brand-50">
          © 2026 Departamento Educativo: Zona Este. Sitio informativo oficial de la Convocatoria 2026.
        </div>
      </div>
    </footer>
  );
}
