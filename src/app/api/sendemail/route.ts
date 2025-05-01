// src/app/api/sendmail/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME!;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD!;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECIEVER!;
// const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST || "smtp.gmail.com";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { subject, message, from } = body;

        if (!subject || !message || !from) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        // Optional: verify transporter is ready
        await transporter.verify();

        const info = await transporter.sendMail({
            from: from, // e.g., "raunak@hifromraunak.xyz"
            to: SITE_MAIL_RECEIVER, // e.g., "raunakmanna11@gmail.com"
            subject,
            text: message,
        });

        return NextResponse.json({
            success: true,
            messageId: info.messageId,
        });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("🔥 Mail send failed:", error.message || error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
