const benefits = [
  {
    title: "Recognized global brand",
    description:
      "Step into a brand with 200+ stores and a loyal customer base built over nearly a decade.",
  },
  {
    title: "Low entry investment",
    description:
      "Launch with a smaller footprint and lower upfront cost than most retail franchise categories.",
  },
  {
    title: "Centralized supply chain",
    description:
      "Inventory, pricing, and merchandising handled centrally — you focus on running the store.",
  },
  {
    title: "Hands-on launch support",
    description:
      "A dedicated manager guides you through site selection, fit-out, hiring, and opening week.",
  },
];

export default function WhyMumuso() {
  return (
    <section id="why" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Why MUMUSO
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            A franchise model designed for first-time owners
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-mist-deep bg-mist-deep sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="bg-paper p-8">
              <p className="font-display text-lg text-ink">{b.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
