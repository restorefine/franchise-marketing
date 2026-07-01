import { storyVideos } from "@/lib/productVideos";

export default function StorySplit() {
  return (
    <section id="story" className="bg-mist">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="grid h-full grid-cols-2 gap-4">
            <div className="relative flex-1 overflow-hidden rounded-3xl">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={storyVideos.storeInterior.src}
                poster={storyVideos.storeInterior.poster}
                aria-label={storyVideos.storeInterior.alt}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <div className="relative flex-1 overflow-hidden rounded-3xl shadow-sm">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={storyVideos.checkoutMoment.src}
                  poster={storyVideos.checkoutMoment.poster}
                  aria-label={storyVideos.checkoutMoment.alt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="flex flex-1 items-center justify-center rounded-3xl bg-brand text-paper">
                <span className="font-display text-3xl">2017</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our story
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            From a single store to a global lifestyle brand
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            MUMUSO started with a simple idea: bring well-designed,
            affordable lifestyle products to every neighbourhood. Nearly a
            decade and 200+ stores later, that idea has grown into a brand
            customers seek out — and a business model partners trust.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Today, we&apos;re looking for hands-on operators and investors
            ready to bring that same experience to new cities across the UK
            and beyond.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-mist-deep pt-6">
            <div>
              <p className="font-display text-2xl text-ink">2017</p>
              <p className="text-xs uppercase tracking-wide text-ink-soft">
                Founded
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-ink">200+</p>
              <p className="text-xs uppercase tracking-wide text-ink-soft">
                Stores
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-ink">60+</p>
              <p className="text-xs uppercase tracking-wide text-ink-soft">
                Countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
