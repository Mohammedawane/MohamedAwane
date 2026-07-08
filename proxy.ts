import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fr"] as const;
const defaultLocale = "fr";

// Pages that stay live in English (e.g. for English-targeted ad campaigns),
// unlike the rest of the site which currently redirects /en/* to /fr/*.
const EN_ALLOWED_PATHS = ["/en/formations/tutorat-francais"];

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

  const isEnAllowed = EN_ALLOWED_PATHS.some(
    (allowed) => pathname === allowed || pathname.startsWith(`${allowed}/`)
  );

  // Redirect /en/* to /fr/* — except the explicitly allowed English pages above
  if (!isEnAllowed && (pathname.startsWith("/en/") || pathname === "/en")) {
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
  response.headers.set("x-locale", isEnAllowed ? "en" : "fr");
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon|coursesPics).*)"],
};
