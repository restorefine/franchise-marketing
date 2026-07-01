"use client";

import { useEffect, useRef, useState } from "react";
import type { ProductVideo } from "@/lib/productVideos";

export default function ProductVideoTile({ videos }: { videos: ProductVideo[] }) {
  const [index, setIndex] = useState(0);
  const [unmuted, setUnmuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const current = videos[index];

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [index]);

  const handleEnded = () => {
    if (unmuted) return;
    setIndex((i) => (i + 1) % videos.length);
  };

  const handleActivate = () => {
    if (unmuted) return;
    setUnmuted(true);
    if (videoRef.current) videoRef.current.muted = false;
  };

  const goTo = (i: number) => {
    setIndex(((i % videos.length) + videos.length) % videos.length);
    setUnmuted(false);
  };

  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div
        className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl bg-ink shadow-sm"
        onClick={handleActivate}
      >
        <video
          key={current.src}
          ref={videoRef}
          className="h-full w-full object-cover"
          src={current.src}
          poster={current.poster}
          autoPlay
          muted={!unmuted}
          loop={videos.length === 1}
          controls={unmuted}
          playsInline
          preload="metadata"
          aria-label={current.alt}
          onEnded={handleEnded}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {videos.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous clip"
            onClick={() => goTo(index - 1)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-ink-soft transition hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {videos.map((v, i) => (
              <button
                key={v.src}
                type="button"
                aria-label={`Show clip ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-brand" : "w-1.5 bg-mist-deep"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next clip"
            onClick={() => goTo(index + 1)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-ink-soft transition hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
