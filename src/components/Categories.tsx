"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const tabs = [
  {
    key: "beauty",
    label: "beauty",
    title: "Beauty & personal care",
    description:
      "K-beauty inspired skincare, cosmetics, and grooming essentials with consistent reorder demand.",
    margin: "48% avg. margin",
    image: images.categoryBeauty,
  },
  {
    key: "home",
    label: "home",
    title: "Home & lifestyle",
    description:
      "Curated decor, storage, and everyday living goods that keep customers returning seasonally.",
    margin: "42% avg. margin",
    image: images.categoryHome,
  },
  {
    key: "accessories",
    label: "accessories",
    title: "Fashion accessories",
    description:
      "Bags, jewellery, and tech accessories — high-turnover items perfect for impulse purchases.",
    margin: "55% avg. margin",
    image: images.categoryAccessories,
  },
];

export default function Categories() {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <section id="categories" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            A product range built to sell
          </h2>
          <div className="mt-6 inline-flex gap-2 rounded-full border border-mist-deep bg-paper p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  active === tab.key
                    ? "bg-ink text-paper"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-mist p-10">
            <p className="font-display text-2xl text-ink">{current.title}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {current.description}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-semibold text-ink">
              {current.margin}
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm">
            <Image
              key={current.key}
              src={current.image}
              alt={current.title}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
