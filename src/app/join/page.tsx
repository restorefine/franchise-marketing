import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinForm from "@/components/JoinForm";
import Faq from "@/components/Faq";
import { ChartIcon, HandshakeIcon, CapIcon, ShopIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Join Our Franchise | MUMUSO",
  description:
    "Apply to bring MUMUSO to your city. Submit your enquiry and our franchise development team will be in touch within 2–3 business days.",
};

const advantages = [
  {
    icon: ChartIcon,
    title: "Proven, high-margin model",
    description:
      "A retail format refined across 200+ stores worldwide, with strong unit economics from day one.",
  },
  {
    icon: HandshakeIcon,
    title: "Full launch support",
    description:
      "From site selection to opening day, our team guides you through every step — typically in 60–90 days.",
  },
  {
    icon: CapIcon,
    title: "Training included",
    description:
      "Comprehensive staff and management training so your store opens ready to perform.",
  },
  {
    icon: ShopIcon,
    title: "Turnkey store design",
    description:
      "Premium fit-out, merchandising, and systems — no guesswork, just a ready-to-launch storefront.",
  },
];

export default function JoinPage() {
  return (
    <div className="flex flex-1 flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Franchise enquiry
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Join the MUMUSO franchise network
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              Tell us about yourself and your target location. While you fill
              in your details, here&apos;s what franchise partners get with
              MUMUSO.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="order-2 lg:order-1 lg:sticky lg:top-28">
              <div className="grid gap-5">
                {advantages.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-mist-deep bg-paper p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-ink">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-base text-ink">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl border border-mist-deep bg-paper p-5 text-center">
                <Stat value="200+" label="Stores" />
                <Stat value="60+" label="Countries" />
                <Stat value="9 yrs" label="Heritage" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <JoinForm />
            </div>
          </div>
        </div>
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-xl text-ink">{value}</p>
      <p className="mt-0.5 text-[10px] uppercase tracking-wide text-ink-soft">
        {label}
      </p>
    </div>
  );
}
