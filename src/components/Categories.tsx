"use client";

import { useState } from "react";
import { productVideos } from "@/lib/productVideos";
import ProductVideoTile from "@/components/ProductVideoTile";

const tabs = [
  {
    key: "beauty",
    label: "beauty",
    title: "Beauty & personal care",
    description:
      "K-beauty inspired skincare, cosmetics, and grooming essentials with consistent reorder demand.",
    margin: "48% avg. margin",
    videos: productVideos.beauty,
  },
  {
    key: "home",
    label: "home",
    title: "Home & lifestyle",
    description:
      "Curated decor, storage, and everyday living goods that keep customers returning seasonally.",
    margin: "42% avg. margin",
    videos: productVideos.home,
  },
  {
    key: "accessories",
    label: "accessories",
    title: "Fashion accessories",
    description:
      "Bags, jewellery, tech accessories, and fun stationery finds — high-turnover items perfect for impulse purchases.",
    margin: "55% avg. margin",
    videos: productVideos.accessories,
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
                    ? "bg-brand text-paper"
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

          <ProductVideoTile key={current.key} videos={current.videos} />
        </div>
      </div>
    </section>
  );
}
