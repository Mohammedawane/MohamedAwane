import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import Navbar from "@/app/Component/Navbar";
import Hero from "@/app/Component/Hero";
import Courses from "@/app/Component/Courses";
import QaSection from "@/app/Component/QaSection";
import Program from "@/app/Component/Program";
import Pricing from "@/app/Component/Pricing";
import IsoSection from "@/app/Component/IsoSection";
import WebSection from "@/app/Component/WebSection";
import Features from "@/app/Component/Features";
import Testimonials from "@/app/Component/Testimonials";
import CTA from "@/app/Component/CTA";
import FAQ from "@/app/Component/FAQ";
import Form from "@/app/Component/Form";
import ContactForm from "@/app/Component/ContactForm";
import Footer from "@/app/Component/Footer";
import Reveal from "@/app/Component/Reveal";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen text-white">
      <Navbar t={dict.nav} lang={lang} />
      <Hero t={dict.hero} coursesCount={dict.courses.items.length} />

      <Reveal><Courses t={dict.courses} lang={lang} /></Reveal>
      <Reveal delay={50}><QaSection t={dict.qaSection} /></Reveal>
      <Reveal delay={50}><Program t={dict.program} /></Reveal>
      <Reveal delay={50}><Pricing t={dict.pricing} /></Reveal>
      <Reveal delay={50}><IsoSection t={dict.isoSection} /></Reveal>
      <Reveal delay={50}><WebSection t={dict.webSection} /></Reveal>
      <Reveal delay={50}><Features t={dict.features} /></Reveal>
      <Reveal threshold={0.05}><Testimonials t={dict.testimonials} /></Reveal>
      <Reveal delay={50}><CTA t={dict.cta} /></Reveal>
      <Reveal delay={50}><FAQ t={dict.faq} /></Reveal>
      <Reveal delay={50}><ContactForm t={dict.contactForm} /></Reveal>
      <Reveal delay={50}><Form t={dict.form} lang={lang} /></Reveal>
      <Footer t={dict.footer} lang={lang} />
    </main>
  );
}
