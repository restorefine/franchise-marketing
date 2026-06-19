import Image from "next/image";

const columns = [
  {
    title: "Franchise",
    links: ["Why MUMUSO", "Categories", "Our Story", "Process", "FAQ"],
  },
  {
    title: "Company",
    links: ["About", "Press", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Franchise Disclosure"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-mist-deep bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/mumuso-logo.svg"
              alt="MUMUSO"
              width={160}
              height={28}
              className="h-7 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              A premium, design-led lifestyle retail brand with stores across
              60+ countries. Now expanding through select franchise
              partnerships.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-soft transition hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-mist-deep pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MUMUSO. All rights reserved.</p>
          <p>franchise@mumuso.com</p>
        </div>
      </div>
    </footer>
  );
}
