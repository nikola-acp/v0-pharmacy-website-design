import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = "supplies@pharmabest.ca";
const FROM = "Pharmabest Site <noreply@arthas.ai>";

export async function POST(req: Request) {
  const data = await req.json();
  const pharmacyName = (data.pharmacyName || "Unknown Pharmacy").toString().trim();

  const body = Object.entries(data)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email || undefined,
    subject: `custom quote inquiry-${pharmacyName}`,
    text: body,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
