const messages = [
  "Now expanding across the UK & Europe",
  "200+ stores worldwide and growing",
  "Low investment, high-margin retail model",
  "Full training & launch support included",
];

export default function AnnouncementBar() {
  const loop = [...messages, ...messages];

  return (
    <div className="overflow-hidden bg-ink py-2.5 text-paper">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap text-xs font-medium tracking-wide">
        {loop.map((message, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="opacity-90">{message}</span>
            <span className="h-1 w-1 rounded-full bg-gold-soft" />
          </span>
        ))}
      </div>
    </div>
  );
}
