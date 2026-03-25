import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { portalAuthConfig } from "@/lib/auth/config";
import { verifySessionToken } from "@/lib/auth/token";

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const token = request.cookies.get(portalAuthConfig.cookieName)?.value;
  const session = await verifySessionToken(token);

  if (pathname.startsWith(portalAuthConfig.portalPath)) {
    if (!session) {
      const loginUrl = new URL(portalAuthConfig.loginPath, request.url);
      loginUrl.searchParams.set("next", `${pathname}${search}`);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname === portalAuthConfig.loginPath && session) {
    return NextResponse.redirect(new URL(portalAuthConfig.portalPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal-interno/:path*", "/login"],
};
