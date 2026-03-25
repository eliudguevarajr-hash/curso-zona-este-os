import { redirect } from "next/navigation";
import { LockKeyhole } from "lucide-react";

import { loginPortalAction } from "@/lib/auth/actions";
import { portalAuthConfig } from "@/lib/auth/config";
import { getPortalSession } from "@/lib/auth/session";

type LoginPageProps = {
  searchParams?: Promise<{ error?: string; next?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const session = await getPortalSession();

  if (session) {
    redirect(portalAuthConfig.portalPath);
  }

  const resolvedSearchParams = (await searchParams) ?? {};
  const nextPath = resolvedSearchParams.next ?? portalAuthConfig.portalPath;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(88,127,160,0.34),transparent_24%),linear-gradient(to_bottom,#b5c4d0_0%,#c5d1da_100%)] px-4 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <div className="w-full rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-float backdrop-blur">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-900 text-white">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <p className="eyebrow mt-6 text-center">Acceso Privado</p>
          <h1 className="mt-2 text-center font-display text-3xl text-brand-900">Ingreso al Portal Interno</h1>
          <p className="mt-3 text-center text-sm leading-7 text-slate-700">
            Este acceso es únicamente para administración interna del Departamento Educativo: Zona Este.
          </p>

          <form action={loginPortalAction} className="mt-8 space-y-4">
            <input name="next" type="hidden" value={nextPath} />
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900" htmlFor="email">
                Correo administrativo
              </label>
              <input className="form-control" id="email" name="email" required type="email" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900" htmlFor="password">
                Contraseña
              </label>
              <input className="form-control" id="password" name="password" required type="password" />
            </div>

            {resolvedSearchParams.error === "invalid" ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                Credenciales incorrectas. Verifica el correo y la contraseña configurados en el portal.
              </div>
            ) : null}

            {resolvedSearchParams.error === "unconfigured" || !portalAuthConfig.isConfigured ? (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                El portal interno todavía no está configurado. Agrega ADMIN_PORTAL_EMAIL, ADMIN_PORTAL_PASSWORD y
                ADMIN_PORTAL_SESSION_SECRET en Vercel y en tu entorno local.
              </div>
            ) : null}

            <button
              className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-800 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-900 disabled:cursor-not-allowed disabled:bg-slate-400"
              disabled={!portalAuthConfig.isConfigured}
              type="submit"
            >
              Ingresar
            </button>
          </form>

          <p className="mt-5 text-center text-xs leading-6 text-slate-500">
            La credencial actual se configura por variables de entorno para un solo administrador.
          </p>
        </div>
      </div>
    </div>
  );
}
