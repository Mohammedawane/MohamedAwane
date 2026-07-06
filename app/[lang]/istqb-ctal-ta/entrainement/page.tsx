import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { hasLocale, getDictionary } from "../../dictionaries";
import Navbar from "@/app/Component/Navbar";
import CTALTATraining from "@/app/Component/CTALTATraining";

export const metadata = {
  title: "Entraînement ISTQB CTAL-TA | Nexo Skills",
  robots: { index: false, follow: false }, // keep training page private
};

// Cookie that persists paid access for 1 year
const ACCESS_COOKIE = "ctalta_access";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

async function verifyPayment(sessionId: string): Promise<boolean> {
  if (!process.env.STRIPE_SECRET_KEY) return false;
  try {
    const { default: Stripe } = await import("stripe");
    const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return (
      session.payment_status === "paid" &&
      session.metadata?.course === "istqb-ctal-ta"
    );
  } catch {
    return false;
  }
}

export default async function EntrainementPage({
  params,
  searchParams,
}: {
  params:       Promise<{ lang: string }>;
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { lang }       = await params;
  const { session_id } = await searchParams;

  if (!hasLocale(lang)) notFound();

  const cookieStore  = await cookies();
  const savedSession = cookieStore.get(ACCESS_COOKIE)?.value;

  // Accept session_id from URL (first access after payment) or from saved cookie (return visits)
  const effectiveId = session_id || savedSession;
  if (!effectiveId) redirect(`/${lang}/istqb-ctal-ta`);

  const bypassKey = process.env.ISTQB_PREVIEW_KEY;
  const isBypass =
    (process.env.NODE_ENV === "development" && effectiveId === "bypass") ||
    (!!bypassKey && effectiveId === bypassKey);

  const paid = isBypass || (await verifyPayment(effectiveId));
  if (!paid) redirect(`/${lang}/istqb-ctal-ta`);

  // On first access after payment: save session_id in a cookie so the user
  // gets back in automatically on all future visits without needing the URL.
  if (session_id && session_id !== savedSession && !isBypass) {
    cookieStore.set(ACCESS_COOKIE, session_id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });
  }

  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar t={dict.nav} lang={lang} courses={dict.courses} />
      <div className="pt-16">
        <CTALTATraining />
      </div>
    </div>
  );
}
