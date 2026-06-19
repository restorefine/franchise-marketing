import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10">
        <h2 className="font-display text-3xl text-paper sm:text-4xl">
          Ready to bring MUMUSO to your city?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-paper/70">
          Tell us a little about yourself and your target location. Our
          franchise development team will follow up within 2–3 business
          days.
        </p>
        <Link
          href="/join"
          className="mt-8 inline-block rounded-full bg-paper px-8 py-3.5 text-sm font-semibold text-brand transition hover:bg-brand-soft"
        >
          Join Our Franchise
        </Link>
      </div>
    </section>
  );
}
