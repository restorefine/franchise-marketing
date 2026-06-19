import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-mist-deep bg-paper px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Franchise opportunities now open
          </p>

          <h1 className="mt-6 font-display text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]">
            Bring a global lifestyle brand to your city
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            MUMUSO is a design-led lifestyle retail brand with stores across
            60+ countries. Partner with us to open a premium, ready-to-launch
            store — backed by proven systems, full training, and ongoing
            support.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/join"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-brand/90"
            >
              Join Our Franchise →
            </Link>
            <a
              href="#why"
              className="rounded-full border border-brand px-7 py-3.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-paper"
            >
              See the model
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-mist-deep pt-6">
            <Stat value="200+" label="Stores worldwide" />
            <Stat value="60+" label="Countries" />
            <Stat value="9 yrs" label="Brand heritage" />
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gold-soft/60 blur-2xl" />
          <div className="absolute -bottom-10 -left-6 h-48 w-48 rounded-full bg-mist-deep blur-2xl" />

          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
            <Image
              src={images.heroStorefront}
              alt="Premium retail storefront"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute inset-6 rounded-[1.75rem] border border-white/15" />
            <div className="relative flex h-full flex-col items-end justify-end p-8 text-paper">
              <span className="font-display text-3xl tracking-tight">
                mumuso
              </span>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-gold-soft">
                Lifestyle · Beauty · Home
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-paper px-6 py-4 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
              Avg. store launch
            </p>
            <p className="font-display text-xl text-ink">60–90 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-ink">{value}</p>
      <p className="text-xs uppercase tracking-wide text-ink-soft">{label}</p>
    </div>
  );
}
