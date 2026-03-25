import { cookies } from "next/headers";

import { portalAuthConfig, type PortalRole } from "@/lib/auth/config";
import { createSessionToken, verifySessionToken } from "@/lib/auth/token";

type SessionPayload = {
  email: string;
  role: PortalRole;
  exp: number;
};

export async function getPortalSession() {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(portalAuthConfig.cookieName)?.value);
}

export async function setPortalSession(payload: Omit<SessionPayload, "exp">) {
  const cookieStore = await cookies();
  const expiresAt = Math.floor(Date.now() / 1000) + portalAuthConfig.sessionDurationSeconds;
  const token = await createSessionToken({ ...payload, exp: expiresAt });

  cookieStore.set(portalAuthConfig.cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: portalAuthConfig.sessionDurationSeconds,
  });
}

export async function clearPortalSession() {
  const cookieStore = await cookies();
  cookieStore.delete(portalAuthConfig.cookieName);
}
