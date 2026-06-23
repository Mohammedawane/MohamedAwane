import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fr"] as const;
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") ?? "";
  const preferred = acceptLang.split(",")[0].split("-")[0].toLowerCase();
  return locales.includes(preferred as (typeof locales)[number])
    ? preferred
    : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal Next.js paths and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon")
  )
    return;

  const hasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!hasLocale) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // Inject x-locale header so the root layout can set <html lang>
  const lang =
    locales.find(
      (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
    ) ?? defaultLocale;

  const response = NextResponse.next();
  response.headers.set("x-locale", lang);
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon).*)"],
};
