import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import Navbar from "@/app/Component/Navbar";
import Hero from "@/app/Component/Hero";
import Courses from "@/app/Component/Courses";
import Stats from "@/app/Component/Stats";
import Modalities from "@/app/Component/Modalities";
import Features from "@/app/Component/Features";
import Testimonials from "@/app/Component/Testimonials";
import CTA from "@/app/Component/CTA";
import FAQ from "@/app/Component/FAQ";
import AboutSection from "@/app/Component/AboutSection";
import ContactForm from "@/app/Component/ContactForm";
import Form from "@/app/Component/Form";
import Footer from "@/app/Component/Footer";
import Reveal from "@/app/Component/Reveal";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Navbar t={dict.nav} lang={lang} courses={dict.courses} />
      <Hero t={dict.hero} coursesCount={dict.courses.items.length} />

      <Reveal><Courses t={dict.courses} lang={lang} /></Reveal>
      <Reveal delay={50}><Stats t={dict.stats} /></Reveal>
      <Reveal delay={50}><Modalities t={dict.modalities} /></Reveal>
      <Reveal delay={50}><Features t={dict.features} /></Reveal>
      <Reveal threshold={0.05}><Testimonials t={dict.testimonials} /></Reveal>
      <Reveal delay={50}><CTA t={dict.cta} /></Reveal>
      <Reveal delay={50}><FAQ t={dict.faq} /></Reveal>
      <Reveal delay={50}><AboutSection t={dict.about} /></Reveal>
      <Reveal delay={50}><ContactForm t={dict.contactForm} /></Reveal>
      <Reveal delay={50}><Form t={dict.form} lang={lang} /></Reveal>
      <Footer t={dict.footer} lang={lang} />
    </main>
  );
}
