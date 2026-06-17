import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { images } from "@/lib/images";

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your application with your preferred location and investment range.",
  },
  {
    number: "02",
    title: "Discovery call",
    description:
      "Our franchise team walks you through the model, economics, and territory fit.",
  },
  {
    number: "03",
    title: "Site & agreement",
    description:
      "We help you secure a location and finalize your franchise agreement.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Store build-out, staff training, and a guided opening — typically in 60–90 days.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              The process
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              From application to opening day
            </h2>
          </div>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink-soft"
          >
            Start your application
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mt-14 aspect-[16/6] w-full overflow-hidden rounded-3xl">
          <Image
            src={images.partnershipHandshake}
            alt="Franchise partnership agreement"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/30" />
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-mist-deep bg-mist-deep sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="bg-paper p-8">
              <p className="font-display text-3xl text-gold">{step.number}</p>
              <p className="mt-4 font-display text-lg text-ink">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
