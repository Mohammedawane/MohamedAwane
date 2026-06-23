import { locales } from "./dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
