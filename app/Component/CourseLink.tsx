"use client";

export default function CourseLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (href.startsWith("#contact")) {
      e.preventDefault();
      // Update hash so Form's hashchange listener picks up the course value
      window.location.hash = href.slice(1); // e.g. "contact?course=qa"
      // Scroll to the actual #contact element
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
