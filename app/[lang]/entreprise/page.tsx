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
      ? "Solutions Entreprise — Ingénierie de Formation Sur Mesure | Nexo Skills"
      : "Enterprise Solutions — Custom Corporate Training | Nexo Skills",
    description: isFr
      ? "Nexo Skills accompagne les entreprises dans la montée en compétences de leurs collaborateurs : ingénierie de formation, programmes sur mesure, management, transformation digitale et communication professionnelle. Consultation gratuite sous 24h."
      : "Nexo Skills helps companies upskill their workforce: training engineering, custom programs, management, digital transformation and professional communication. Free consultation within 24h.",
    keywords: isFr
      ? ["formation entreprise", "ingénierie de formation", "formation sur mesure", "montée en compétences", "management leadership", "transformation digitale", "communication professionnelle", "formation intra-entreprise"]
      : ["corporate training", "training engineering", "custom programs", "upskilling", "management leadership", "digital transformation", "professional communication", "in-house training"],
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
        ? "Formez vos équipes avec des programmes sur mesure : ingénierie de formation, management, digital et communication. Consultation gratuite."
        : "Train your teams with custom programs: training engineering, management, digital and communication. Free consultation.",
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
        ? "Formez vos équipes avec des programmes sur mesure. Ingénierie de formation, management, digital."
        : "Train your teams with custom programs. Training engineering, management, digital.",
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
      ? "Ingénierie de formation et programmes sur mesure : management, transformation digitale, communication professionnelle."
      : "Training engineering and custom programs: management, digital transformation, professional communication.",
    provider: {
      "@type": "Organization",
      name: "Nexo Skills",
      url: BASE,
    },
    serviceType: isFr ? "Formation professionnelle entreprise" : "Corporate Training",
    areaServed: { "@type": "Country", name: "France" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isFr ? "Catalogue Solutions Entreprise" : "Enterprise Solutions Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isFr ? "Ingénierie de Formation" : "Training Engineering",
            description: isFr
              ? "Audit des besoins, conception pédagogique sur mesure, déploiement et évaluation ROI"
              : "Needs audit, custom curriculum design, deployment and ROI evaluation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isFr ? "Offre Sur Mesure" : "Custom Programs",
            description: isFr
              ? "Co-construction avec vos RH, formats hybrides, certifiant ou non-certifiant"
              : "Co-design with HR, hybrid formats, certified or non-certified",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Management & Leadership",
            description: isFr
              ? "Animer une équipe, déléguer, motiver et développer les talents en entreprise"
              : "Lead a team, delegate, motivate and develop in-house talent",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isFr ? "Transformation Digitale" : "Digital Transformation",
            description: isFr
              ? "IA, automatisation et culture data pour accompagner vos collaborateurs"
              : "AI, automation and data culture to prepare your workforce",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isFr ? "Communication Professionnelle" : "Professional Communication",
            description: isFr
              ? "Prise de parole, anglais des affaires et techniques de négociation"
              : "Public speaking, business English and negotiation techniques",
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
