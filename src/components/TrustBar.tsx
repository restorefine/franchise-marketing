const press = ["FORBES", "RETAIL WEEK", "ENTREPRENEUR", "FRANCHISE TODAY"];

export default function TrustBar() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[1.3fr_auto] lg:px-10">
        <div>
          <blockquote className="font-display text-xl leading-snug text-ink sm:text-2xl">
            “Most franchise models sell you a kit and disappear. MUMUSO
            partners stay close — from site selection to opening week and
            beyond.”
          </blockquote>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-3">
            {press.map((name) => (
              <span
                key={name}
                className="text-xs font-semibold tracking-[0.18em] text-ink-soft/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-ink px-8 py-7 text-paper">
          <p className="text-sm uppercase tracking-wide text-gold-soft">
            Partner satisfaction
          </p>
          <p className="mt-1 font-display text-3xl">4.9 / 5</p>
          <p className="mt-2 text-sm text-paper/70">
            Rated by active franchise partners
          </p>
          <a
            href="#process"
            className="mt-4 inline-block text-sm font-semibold underline decoration-gold-soft underline-offset-4"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
