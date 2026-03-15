import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const clinic = String(formData.get("clinic") ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  console.log("Enquiry received", { name, email, clinic, messageLength: message.length });

  return NextResponse.redirect(new URL("/contact?sent=1", request.url), { status: 303 });
}
