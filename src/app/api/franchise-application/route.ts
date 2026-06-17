import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const required = ["fullName", "email", "phone", "city", "budget"];
  const missing = required.filter((field) => !data?.[field]);

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  // In production this would persist to a CRM / database and notify the
  // franchise development team. Logged here as the integration point.
  console.log("New franchise application:", data);

  return NextResponse.json({ ok: true });
}
