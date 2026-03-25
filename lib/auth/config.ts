import { env, isPortalAuthConfigured } from "@/lib/env";

export const portalAuthConfig = {
  cookieName: "dez_portal_session",
  loginPath: "/login",
  portalPath: "/portal-interno",
  adminEmail: env.ADMIN_PORTAL_EMAIL ?? "",
  adminPassword: env.ADMIN_PORTAL_PASSWORD ?? "",
  sessionSecret: env.ADMIN_PORTAL_SESSION_SECRET ?? "portal-not-configured",
  sessionDurationSeconds: 60 * 60 * 12,
  isConfigured: isPortalAuthConfigured(),
};

export const portalRoles = ["admin", "educador", "estudiante"] as const;

export type PortalRole = (typeof portalRoles)[number];

// TODO: Replace the single-admin env-based credential check with a real user table in
// Supabase Auth or a dedicated users/roles schema once multiple internal accounts are needed.
