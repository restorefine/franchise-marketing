import { BoxIcon, CapIcon, ChartIcon, HandshakeIcon, ShopIcon } from "@/components/icons";

const features = [
  { icon: ShopIcon, label: "Turnkey store design" },
  { icon: BoxIcon, label: "Centralized supply chain" },
  { icon: CapIcon, label: "Full staff training" },
  { icon: ChartIcon, label: "Proven unit economics" },
  { icon: HandshakeIcon, label: "Dedicated launch manager" },
];

export default function FeatureStrip() {
  return (
    <section className="border-y border-mist bg-mist">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-5 lg:px-10">
        {features.map((f) => (
          <div key={f.label} className="flex items-center gap-2.5">
            <f.icon className="h-4 w-4 text-ink-soft" />
            <span className="text-sm font-medium text-ink-soft">
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
