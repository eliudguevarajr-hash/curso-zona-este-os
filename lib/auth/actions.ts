"use server";

import { redirect } from "next/navigation";

import { portalAuthConfig } from "@/lib/auth/config";
import { clearPortalSession, setPortalSession } from "@/lib/auth/session";

export async function loginPortalAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const nextPath = String(formData.get("next") ?? portalAuthConfig.portalPath);

  if (email !== portalAuthConfig.adminEmail.toLowerCase() || password !== portalAuthConfig.adminPassword) {
    redirect(`${portalAuthConfig.loginPath}?error=invalid`);
  }

  await setPortalSession({ email, role: "admin" });
  redirect(nextPath.startsWith("/") ? nextPath : portalAuthConfig.portalPath);
}

export async function logoutPortalAction() {
  await clearPortalSession();
  redirect(portalAuthConfig.loginPath);
}

// TODO: When multiple roles are introduced, replace this env check with a role lookup
// against Supabase and set the session payload with the user's role and permissions.
