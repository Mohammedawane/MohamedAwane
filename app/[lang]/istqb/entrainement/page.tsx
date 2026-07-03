import { notFound, redirect } from "next/navigation";
import { hasLocale, getDictionary } from "../../dictionaries";
import Navbar from "@/app/Component/Navbar";
import ISTQBTraining from "@/app/Component/ISTQBTraining";

export const metadata = {
  title: "Entraînement ISTQB Foundation Level | Nexo Skills",
  robots: { index: false, follow: false }, // keep training page private
};

async function verifyPayment(sessionId: string): Promise<boolean> {
  if (!process.env.STRIPE_SECRET_KEY) return false;
  try {
    const { default: Stripe } = await import("stripe");
    const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return (
      session.payment_status === "paid" &&
      session.metadata?.course === "istqb-fondation"
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

  if (!session_id) redirect(`/${lang}/istqb`);

  const bypassKey = process.env.ISTQB_PREVIEW_KEY;
  const isBypass =
    (process.env.NODE_ENV === "development" && session_id === "bypass") ||
    (!!bypassKey && session_id === bypassKey);

  const paid = isBypass || (await verifyPayment(session_id));
  if (!paid) redirect(`/${lang}/istqb`);

  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar t={dict.nav} lang={lang} courses={dict.courses} />
      <div className="pt-16">
        <ISTQBTraining />
      </div>
    </div>
  );
}
