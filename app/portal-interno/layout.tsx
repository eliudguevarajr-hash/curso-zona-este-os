import { redirect } from "next/navigation";

import { PortalButton } from "@/components/portal/portal-button";
import { PortalSidebar } from "@/components/portal/portal-sidebar";
import { logoutPortalAction } from "@/lib/auth/actions";
import { getPortalSession } from "@/lib/auth/session";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const session = await getPortalSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(88,127,160,0.26),transparent_24%),linear-gradient(to_bottom,#b8c8d4_0%,#c7d3dc_100%)] px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[290px_minmax(0,1fr)]">
        <PortalSidebar />

        <div className="space-y-4">
          <header className="flex flex-col gap-4 rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">Sesión activa</p>
              <h2 className="mt-1 text-xl font-semibold text-brand-900">{session.email}</h2>
              <p className="mt-1 text-sm text-slate-700">Rol actual: {session.role}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PortalButton href="/portal-interno/vista-estudiante" variant="secondary">
                Ver vista del estudiante
              </PortalButton>
              <PortalButton href="/" variant="secondary">
                Ver sitio público
              </PortalButton>
              <form action={logoutPortalAction}>
                <PortalButton type="submit" variant="ghost">
                  Cerrar sesión
                </PortalButton>
              </form>
            </div>
          </header>

          {children}
        </div>
      </div>
    </div>
  );
}
