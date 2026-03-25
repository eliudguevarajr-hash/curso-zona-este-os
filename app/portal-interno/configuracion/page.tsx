import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { portalAuthConfig } from "@/lib/auth/config";

export default function PortalSettingsPage() {
  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Configuración"
        eyebrow="Ajustes"
        title="Configuración"
        description="Resumen administrativo del acceso actual, preparación para roles futuros e integración posterior con Supabase."
      />

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
          <p className="eyebrow">Perfil administrativo</p>
          <h3 className="mt-3 text-lg font-semibold text-brand-900">Administrador principal</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            El acceso actual utiliza un único correo y contraseña definidos por variables de entorno.
          </p>
          <p className="mt-3 text-sm font-semibold text-brand-800">{portalAuthConfig.adminEmail}</p>
        </article>

        <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
          <p className="eyebrow">Roles futuros</p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>admin</li>
            <li>educador</li>
            <li>estudiante</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            La estructura del portal ya contempla que estos roles se conecten después mediante autenticación y permisos.
          </p>
        </article>

        <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
          <p className="eyebrow">Integraciones futuras</p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>Supabase Auth para múltiples usuarios</li>
            <li>Supabase Database para estudiantes y calificaciones</li>
            <li>Supabase Storage para PDFs, videos y tareas</li>
            <li>Permisos por rol y vistas específicas</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
