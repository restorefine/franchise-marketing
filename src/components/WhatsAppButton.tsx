import Image from "next/image";

const WHATSAPP_NUMBER = "447000000000"; // placeholder — replace with real number, digits only
const WHATSAPP_MESSAGE =
  "Hi, I'm interested in opening a MUMUSO franchise. Could you share more details?";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition hover:scale-105 hover:shadow-2xl"
    >
      <Image src="/whatsapp.svg" alt="WhatsApp" width={44} height={44} />
    </a>
  );
}
