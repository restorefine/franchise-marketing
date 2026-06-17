"use client";

import { useState } from "react";
import { ArrowIcon } from "@/components/icons";

const faqs = [
  {
    question: "What investment is required to open a MUMUSO store?",
    answer:
      "Total investment typically ranges from £30,000 to £250,000+ depending on store size, location, and format. We'll discuss exact figures for your target territory during your discovery call.",
  },
  {
    question: "Do I need retail experience to apply?",
    answer:
      "No. Many of our partners come from outside retail. We provide full training covering operations, merchandising, and staff management before and after launch.",
  },
  {
    question: "How long does it take to open a store?",
    answer:
      "Most partners go from signed agreement to opening day in 60–90 days, depending on site readiness and local permitting timelines.",
  },
  {
    question: "What ongoing support does MUMUSO provide?",
    answer:
      "You'll have a dedicated franchise success manager, centralized supply and merchandising, marketing assets, and access to our partner training portal for the life of your agreement.",
  },
  {
    question: "Are exclusive territories available?",
    answer:
      "Yes. We grant protected territories to qualified partners on a first-come basis. Your franchise development contact can confirm availability for your area.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-mist">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Frequently asked
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Questions from future partners
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-mist-deep bg-paper"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-ink">{faq.question}</span>
                  <ArrowIcon
                    className={`h-4 w-4 flex-shrink-0 text-ink-soft transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
