import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "../dictionaries";
import Navbar from "@/app/Component/Navbar";
import Footer from "@/app/Component/Footer";
import EnterpriseSection from "@/app/Component/EnterpriseSection";
import type { Metadata } from "next";

const BASE = "https://www.nexo-skills.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang !== "en";

  return {
    title: isFr
      ? "Solutions Entreprise — Formation Linguistique Sur Mesure | Nexo Skills"
      : "Enterprise Solutions — Custom Corporate Language Training | Nexo Skills",
    description: isFr
      ? "Nexo Skills accompagne les entreprises dans la montée en compétences linguistiques de leurs collaborateurs : diagnostic, cours sur mesure en anglais des affaires, français professionnel et préparation aux certifications. Consultation gratuite sous 24h."
      : "Nexo Skills helps companies upskill their workforce's language skills: assessment, custom business English and professional French classes, and exam certification prep. Free consultation within 24h.",
    keywords: isFr
      ? ["formation langue entreprise", "anglais des affaires", "français professionnel", "cours de langue sur mesure", "formation linguistique intra-entreprise", "préparation TOEFL IELTS DELF entreprise"]
      : ["corporate language training", "business English", "professional French", "custom language classes", "in-house language training", "corporate TOEFL IELTS DELF prep"],
    alternates: {
      canonical: `${BASE}/${lang}/entreprise`,
      languages: {
        fr: `${BASE}/fr/entreprise`,
        en: `${BASE}/en/entreprise`,
      },
    },
    openGraph: {
      title: isFr
        ? "Solutions Entreprise — Nexo Skills"
        : "Enterprise Solutions — Nexo Skills",
      description: isFr
        ? "Formez vos équipes en langues avec des cours sur mesure : anglais des affaires, français professionnel, préparation aux certifications. Consultation gratuite."
        : "Train your teams in languages with custom classes: business English, professional French, exam certification prep. Free consultation.",
      url: `${BASE}/${lang}/entreprise`,
      siteName: "Nexo Skills",
      locale: isFr ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isFr
        ? "Solutions Entreprise — Nexo Skills"
        : "Enterprise Solutions — Nexo Skills",
      description: isFr
        ? "Formez vos équipes en langues avec des cours sur mesure. Anglais des affaires, français professionnel."
        : "Train your teams in languages with custom classes. Business English, professional French.",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function EntreprisePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const isFr = lang !== "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isFr ? "Solutions Entreprise — Nexo Skills" : "Enterprise Solutions — Nexo Skills",
    description: isFr
      ? "Diagnostic linguistique et cours sur mesure : anglais des affaires, français professionnel, préparation aux certifications."
      : "Language assessment and custom classes: business English, professional French, exam certification prep.",
    provider: {
      "@type": "Organization",
      name: "Nexo Skills",
      url: BASE,
    },
    serviceType: isFr ? "Formation linguistique entreprise" : "Corporate Language Training",
    areaServed: { "@type": "Country", name: "France" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isFr ? "Catalogue Solutions Entreprise" : "Enterprise Solutions Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isFr ? "Diagnostic Linguistique" : "Language Needs Assessment",
            description: isFr
              ? "Test de niveau, objectifs alignés sur vos enjeux métier, suivi de progression"
              : "Level testing, goals aligned with business needs, progress tracking",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isFr ? "Cours Sur Mesure" : "Custom Programs",
            description: isFr
              ? "Co-construction avec vos RH, cours individuels ou en petit groupe, en ligne"
              : "Co-design with HR, individual or small-group live online classes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isFr ? "Anglais des Affaires" : "Business English",
            description: isFr
              ? "Réunions, emails, présentations et négociations en anglais"
              : "Meetings, emails, presentations and negotiations in English",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isFr ? "Français Professionnel" : "Professional French",
            description: isFr
              ? "Communication écrite et orale en français pour équipes non-francophones"
              : "Written and spoken French communication for non-native employees",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isFr ? "Préparation aux Certifications" : "Exam & Certification Prep",
            description: isFr
              ? "TOEFL, IELTS, DELF/DALF pour la mobilité internationale"
              : "TOEFL, IELTS, DELF/DALF for international mobility",
          },
        },
      ],
    },
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">
        {isFr ? "Solutions Entreprise — Nexo Skills" : "Enterprise Solutions — Nexo Skills"}
      </h1>
      <Navbar t={dict.nav} lang={lang} courses={dict.courses} />
      <EnterpriseSection lang={lang} />
      <Footer t={dict.footer} lang={lang} />
    </main>
  );
}
