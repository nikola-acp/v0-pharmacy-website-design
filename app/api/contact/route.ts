import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "supplies@pharmabest.ca";
const FROM = "Pharmabest Supplies <noreply@arthas.ai>";

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const pharmacyName = (data.pharmacyName || "Unknown Pharmacy").toString().trim();

  const body = Object.entries(data)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const { data: sent, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: typeof data.email === "string" ? data.email : undefined,
    subject: `website inquiry-${pharmacyName}`,
    text: body,
  });

  if (error) {
    console.error("[contact] Resend send failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log("[contact] email sent", { id: sent?.id, to: TO });
  return NextResponse.json({ ok: true });
}
