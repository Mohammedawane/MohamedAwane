import { notFound } from "next/navigation";
import Link from "next/link";
import { hasLocale } from "../../dictionaries";

type Doc = "privacy" | "terms" | "refund";
const VALID_DOCS: Doc[] = ["privacy", "terms", "refund"];

const CONTENT: Record<Doc, Record<"en" | "fr", { title: string; sections: { heading: string; body: string }[] }>> = {
  privacy: {
    en: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. Who we are",
          body: "Nexo Skills (info@nexo-skills.com) is the data controller for the personal information collected on this website.",
        },
        {
          heading: "2. What we collect",
          body: "When you fill in the registration form, we collect your name, email address, phone number, and your experience level. This information is used solely to process your enrollment and communicate with you about your training.",
        },
        {
          heading: "3. Payment data",
          body: "Payments are processed by Stripe, Inc. We do not store any card details on our servers. Stripe's privacy policy applies to payment data.",
        },
        {
          heading: "4. How we use your data",
          body: "We use your data to confirm your enrollment, send you pre-training materials, and provide post-training support. We do not sell or share your data with third parties for marketing purposes.",
        },
        {
          heading: "5. Data retention",
          body: "We retain your personal data for up to 3 years after your last interaction with us, unless you request deletion sooner.",
        },
        {
          heading: "6. Your rights",
          body: "You have the right to access, correct, or delete your personal data at any time. To exercise these rights, email us at info@nexo-skills.com.",
        },
        {
          heading: "7. Cookies",
          body: "This site uses no advertising or tracking cookies. We may use session cookies necessary for the site to function correctly.",
        },
        {
          heading: "8. Contact",
          body: "For any privacy-related questions, contact us at info@nexo-skills.com.",
        },
      ],
    },
    fr: {
      title: "Politique de confidentialité",
      sections: [
        {
          heading: "1. Qui sommes-nous",
          body: "Nexo Skills (info@nexo-skills.com) est le responsable du traitement des données personnelles collectées sur ce site.",
        },
        {
          heading: "2. Ce que nous collectons",
          body: "Lorsque vous remplissez le formulaire d'inscription, nous collectons votre nom, adresse e-mail, numéro de téléphone et votre niveau d'expérience. Ces informations sont utilisées uniquement pour traiter votre inscription et communiquer avec vous concernant votre formation.",
        },
        {
          heading: "3. Données de paiement",
          body: "Les paiements sont traités par Stripe, Inc. Nous ne stockons aucune donnée de carte bancaire sur nos serveurs. La politique de confidentialité de Stripe s'applique aux données de paiement.",
        },
        {
          heading: "4. Utilisation de vos données",
          body: "Nous utilisons vos données pour confirmer votre inscription, vous envoyer les supports de formation et assurer un suivi après la formation. Nous ne vendons ni ne partageons vos données avec des tiers à des fins de marketing.",
        },
        {
          heading: "5. Conservation des données",
          body: "Nous conservons vos données personnelles pendant 3 ans après votre dernière interaction avec nous, sauf si vous demandez leur suppression avant.",
        },
        {
          heading: "6. Vos droits",
          body: "Vous avez le droit d'accéder, de corriger ou de supprimer vos données personnelles à tout moment. Pour exercer ces droits, contactez-nous à info@nexo-skills.com.",
        },
        {
          heading: "7. Cookies",
          body: "Ce site n'utilise aucun cookie publicitaire ou de suivi. Nous pouvons utiliser des cookies de session nécessaires au bon fonctionnement du site.",
        },
        {
          heading: "8. Contact",
          body: "Pour toute question relative à la confidentialité, contactez-nous à info@nexo-skills.com.",
        },
      ],
    },
  },
  terms: {
    en: {
      title: "Terms & Conditions",
      sections: [
        {
          heading: "1. Acceptance",
          body: "By registering for a Nexo Skills program, you agree to these Terms & Conditions in full.",
        },
        {
          heading: "2. Programs",
          body: "Nexo Skills offers online training programs delivered live via video conference. Schedules are published on the website and may be adjusted by Nexo Skills with reasonable notice.",
        },
        {
          heading: "3. Registration",
          body: "Registration is confirmed upon receipt of full payment. A confirmation email will be sent within 24 hours.",
        },
        {
          heading: "4. Payment",
          body: "Prices are in US dollars (USD). Payment is processed securely via Stripe. Installment plans may be available upon request — contact us at info@nexo-skills.com.",
        },
        {
          heading: "5. Cancellation by participant",
          body: "If you cancel more than 7 days before the program start date, you will receive a full refund. Cancellations within 7 days of the start date are non-refundable. You may transfer your spot to another participant at no cost.",
        },
        {
          heading: "6. Cancellation by Nexo Skills",
          body: "Nexo Skills reserves the right to cancel or reschedule a program if the minimum number of participants is not reached. In such cases, enrolled participants will be offered a full refund or a transfer to a later session.",
        },
        {
          heading: "7. Certificate",
          body: "A certificate of completion is issued to participants who attend the full program. Nexo Skills certificates are not government-accredited diplomas.",
        },
        {
          heading: "8. Intellectual property",
          body: "All training materials provided are the property of Nexo Skills. They may not be reproduced, redistributed, or resold without written permission.",
        },
        {
          heading: "9. Liability",
          body: "Nexo Skills provides training for educational purposes only. We are not responsible for outcomes related to the application of knowledge gained in our programs.",
        },
        {
          heading: "10. Governing law",
          body: "These terms are governed by the laws of Canada. Any dispute shall be submitted to the competent courts of Canada.",
        },
      ],
    },
    fr: {
      title: "Conditions générales de vente",
      sections: [
        {
          heading: "1. Acceptation",
          body: "En vous inscrivant à un programme Nexo Skills, vous acceptez l'intégralité des présentes conditions générales.",
        },
        {
          heading: "2. Programmes",
          body: "Nexo Skills propose des programmes de formation en ligne dispensés en direct par visioconférence. Les calendriers sont publiés sur le site et peuvent être ajustés par Nexo Skills avec un préavis raisonnable.",
        },
        {
          heading: "3. Inscription",
          body: "L'inscription est confirmée à réception du paiement complet. Un e-mail de confirmation sera envoyé dans les 24 heures.",
        },
        {
          heading: "4. Paiement",
          body: "Les prix sont exprimés en dollars américains (USD). Le paiement est traité de manière sécurisée via Stripe. Des facilités de paiement peuvent être disponibles sur demande — contactez-nous à info@nexo-skills.com.",
        },
        {
          heading: "5. Annulation par le participant",
          body: "Si vous annulez plus de 7 jours avant la date de début du programme, vous bénéficiez d'un remboursement intégral. Les annulations dans les 7 jours précédant le début ne sont pas remboursables. Vous pouvez transférer votre place à un autre participant sans frais.",
        },
        {
          heading: "6. Annulation par Nexo Skills",
          body: "Nexo Skills se réserve le droit d'annuler ou de reprogrammer une session si le nombre minimum de participants n'est pas atteint. Dans ce cas, les participants inscrits se verront proposer un remboursement intégral ou un transfert vers une session ultérieure.",
        },
        {
          heading: "7. Certificat",
          body: "Un certificat de réussite est délivré aux participants qui suivent l'intégralité du programme. Les certificats Nexo Skills ne sont pas des diplômes reconnus par l'État.",
        },
        {
          heading: "8. Propriété intellectuelle",
          body: "Tous les supports de formation fournis sont la propriété de Nexo Skills. Ils ne peuvent être reproduits, redistribués ou revendus sans autorisation écrite.",
        },
        {
          heading: "9. Responsabilité",
          body: "Nexo Skills dispense des formations à des fins pédagogiques uniquement. Nous déclinons toute responsabilité quant aux résultats liés à l'application des connaissances acquises dans nos programmes.",
        },
        {
          heading: "10. Droit applicable",
          body: "Les présentes conditions sont régies par le droit canadien. Tout litige sera soumis aux tribunaux compétents du Canada.",
        },
      ],
    },
  },
  refund: {
    en: {
      title: "Refund Policy",
      sections: [
        {
          heading: "Our commitment",
          body: "We want you to be confident in your investment. Here is our straightforward refund policy.",
        },
        {
          heading: "Full refund — more than 7 days before start",
          body: "If you cancel your registration more than 7 days before the program start date, you will receive a 100% refund to your original payment method within 5–10 business days.",
        },
        {
          heading: "No refund — within 7 days of start",
          body: "Cancellations made within 7 days of the program start date are not eligible for a refund, as preparation and resource allocation will already be underway.",
        },
        {
          heading: "Spot transfer",
          body: "Instead of a refund, you may transfer your spot to another person at no cost. Contact us at info@nexo-skills.com at least 48 hours before the start date.",
        },
        {
          heading: "Session cancelled by Nexo Skills",
          body: "If we cancel or significantly reschedule a session, you will receive a full refund or the option to transfer to a future session.",
        },
        {
          heading: "How to request a refund",
          body: "Email info@nexo-skills.com with your name and registration details. We will process your request within 2 business days.",
        },
      ],
    },
    fr: {
      title: "Politique de remboursement",
      sections: [
        {
          heading: "Notre engagement",
          body: "Nous voulons que vous soyez confiant dans votre investissement. Voici notre politique de remboursement.",
        },
        {
          heading: "Remboursement intégral — plus de 7 jours avant le début",
          body: "Si vous annulez votre inscription plus de 7 jours avant la date de début du programme, vous recevrez un remboursement à 100% sur votre moyen de paiement initial dans un délai de 5 à 10 jours ouvrés.",
        },
        {
          heading: "Aucun remboursement — dans les 7 jours avant le début",
          body: "Les annulations effectuées dans les 7 jours précédant le début du programme ne donnent pas droit à un remboursement, la préparation et l'allocation des ressources étant déjà en cours.",
        },
        {
          heading: "Transfert de place",
          body: "En lieu et place d'un remboursement, vous pouvez transférer votre place à une autre personne sans frais. Contactez-nous à info@nexo-skills.com au moins 48 heures avant la date de début.",
        },
        {
          heading: "Session annulée par Nexo Skills",
          body: "Si nous annulons ou reportons significativement une session, vous recevrez un remboursement intégral ou la possibilité de reporter votre inscription à une session ultérieure.",
        },
        {
          heading: "Comment demander un remboursement",
          body: "Envoyez un e-mail à info@nexo-skills.com avec votre nom et vos informations d'inscription. Nous traiterons votre demande dans les 2 jours ouvrés.",
        },
      ],
    },
  },
};

export function generateStaticParams() {
  const docs: Doc[] = ["privacy", "terms", "refund"];
  const langs = ["en", "fr"];
  return langs.flatMap((lang) => docs.map((doc) => ({ lang, doc })));
}

export default async function LegalPage({ params }: { params: Promise<{ lang: string; doc: string }> }) {
  const { lang, doc } = await params;

  if (!hasLocale(lang) || !VALID_DOCS.includes(doc as Doc)) notFound();

  const locale = lang as "en" | "fr";
  const docKey = doc as Doc;
  const content = CONTENT[docKey][locale];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link
          href={`/${lang}`}
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-300"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          {locale === "fr" ? "Retour à l'accueil" : "Back to home"}
        </Link>

        <h1 className="mb-3 text-4xl font-bold">{content.title}</h1>
        <p className="mb-12 text-sm text-gray-500">
          {locale === "fr" ? "Dernière mise à jour : juin 2026" : "Last updated: June 2026"}
        </p>

        <div className="space-y-8">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h2 className="mb-2 text-lg font-semibold text-white">{section.heading}</h2>
              <p className="text-sm leading-relaxed text-gray-400">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/5 bg-slate-900/60 px-6 py-6">
          <p className="text-sm text-gray-400">
            {locale === "fr"
              ? "Des questions ? Contactez-nous à "
              : "Questions? Contact us at "}
            <a href="mailto:info@nexo-skills.com" className="text-blue-400 hover:text-blue-300">
              info@nexo-skills.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
