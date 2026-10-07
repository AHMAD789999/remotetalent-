import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try { 
    const { fullName, email, service, message } = await request.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Talent Harbor Contact <onboarding@resend.dev>", // Replace with your verified domain email if set up in Resend
      to: ["support@talentharbor.net"],
      subject: `New Inquiry - ${service} - ${fullName}`,
      replyTo: email,
      text: `
New Client Inquiry Received

CONTACT DETAILS:
- Full Name: ${fullName}
- Email: ${email}
- Service Required: ${service}

PROJECT DETAILS:
${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
