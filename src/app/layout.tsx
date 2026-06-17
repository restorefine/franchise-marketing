import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { FranchiseModalProvider } from "@/components/FranchiseModalProvider";
import FranchiseModal from "@/components/FranchiseModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUMUSO Franchise | Own a Premium Lifestyle Store",
  description:
    "Join the MUMUSO franchise network — a premium, design-led lifestyle retail brand trusted across 60+ countries. Apply today to bring MUMUSO to your city.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans">
        <FranchiseModalProvider>
          {children}
          <FranchiseModal />
          <WhatsAppButton />
        </FranchiseModalProvider>
      </body>
    </html>
  );
}
