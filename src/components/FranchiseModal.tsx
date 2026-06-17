"use client";

import { FormEvent, useEffect, useState } from "react";
import { useFranchiseModal } from "@/components/FranchiseModalProvider";
import { CheckIcon, CloseIcon } from "@/components/icons";

const budgetRanges = [
  "£30,000 – £60,000",
  "£60,000 – £120,000",
  "£120,000 – £250,000",
  "£250,000+",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function FranchiseModal() {
  const { isOpen, closeModal } = useFranchiseModal();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/franchise-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  function handleClose() {
    closeModal();
    setStatus("idle");
    setErrorMessage("");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/60 px-4 py-8 backdrop-blur-sm sm:items-center"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-paper p-6 shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition hover:bg-mist hover:text-ink"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-10 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mist text-ink">
              <CheckIcon className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl text-ink">
              Application received
            </h3>
            <p className="max-w-sm text-sm text-ink-soft">
              Thank you for your interest in MUMUSO. Our franchise development
              team will review your details and reach out within 2–3 business
              days.
            </p>
            <button
              onClick={handleClose}
              className="mt-2 rounded-full border border-ink px-6 py-2.5 text-sm font-medium text-ink transition hover:bg-ink hover:text-paper"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Franchise application
            </p>
            <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
              Tell us about you
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              Share a few details and our franchise development team will be
              in touch to discuss next steps.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="fullName" required placeholder="Jane Doe" />
              <Field
                label="Email address"
                name="email"
                type="email"
                required
                placeholder="jane@email.com"
              />
              <Field
                label="Phone number"
                name="phone"
                type="tel"
                required
                placeholder="+44 7000 000000"
              />
              <Field
                label="Preferred city / region"
                name="city"
                required
                placeholder="Manchester, UK"
              />

              <div className="sm:col-span-1">
                <label className="block text-xs font-medium uppercase tracking-wide text-ink-soft">
                  Investment budget
                </label>
                <select
                  name="budget"
                  required
                  defaultValue=""
                  className="mt-1.5 w-full rounded-xl border border-mist-deep bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <Field
                label="Relevant experience (optional)"
                name="experience"
                placeholder="Retail, hospitality, etc."
              />

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium uppercase tracking-wide text-ink-soft">
                  Tell us more (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="What excites you about bringing MUMUSO to your area?"
                  className="mt-1.5 w-full resize-none rounded-xl border border-mist-deep bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
                />
              </div>

              {status === "error" && (
                <p className="sm:col-span-2 text-sm text-red-600">{errorMessage}</p>
              )}

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-ink-soft disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting…" : "Submit application"}
                </button>
                <p className="mt-3 text-center text-xs text-ink-soft">
                  By submitting, you agree to be contacted by MUMUSO about
                  franchise opportunities.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wide text-ink-soft">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-mist-deep bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
      />
    </div>
  );
}
