import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let email = "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as { email?: string };
    email = body.email ?? "";
  } else {
    const formData = await request.formData();
    email = String(formData.get("email") ?? "");
  }

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  console.log("Newsletter signup:", email);
  return NextResponse.redirect(new URL("/?newsletter=success", request.url), { status: 303 });
}
