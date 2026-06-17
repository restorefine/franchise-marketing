"use client";

import { useFranchiseModal } from "@/components/FranchiseModalProvider";

export default function CtaBanner() {
  const { openModal } = useFranchiseModal();

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10">
        <h2 className="font-display text-3xl text-paper sm:text-4xl">
          Ready to bring MUMUSO to your city?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-paper/70">
          Tell us a little about yourself and your target location. Our
          franchise development team will follow up within 2–3 business
          days.
        </p>
        <button
          onClick={openModal}
          className="mt-8 rounded-full bg-paper px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-soft"
        >
          Join Our Franchise
        </button>
      </div>
    </section>
  );
}
