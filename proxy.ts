import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fr"] as const;
const defaultLocale = "fr";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/coursesPics") ||
    /\.(?:jpg|jpeg|png|gif|svg|ico|webp|woff2?|ttf)$/.test(pathname)
  )
    return;

  // Redirect /en/* to /fr/*
  if (pathname.startsWith("/en/") || pathname === "/en") {
    const newPath = pathname.replace(/^\/en/, "/fr");
    request.nextUrl.pathname = newPath || "/fr";
    return NextResponse.redirect(request.nextUrl);
  }

  const hasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!hasLocale) {
    request.nextUrl.pathname = `/fr${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  const response = NextResponse.next();
  response.headers.set("x-locale", "fr");
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon|coursesPics).*)"],
};
