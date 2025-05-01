import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import prisma from "@/lib/prisma"; // Assuming you're using Prisma for DB access

const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME!;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD!;
// const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECIEVER!;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
});

export async function POST() {
    try {
        // Hardcoded subject and message
        const subject = `Monthly Newsletter for ${new Date().toLocaleString(
            "default",
            { month: "long" }
        )}`;
        const message =
            "This is the hardcoded message content that will be sent to all reviewers.";

        // Fetch all reviews' emails (excluding nulls)
        const reviews = await prisma.review.findMany({
            where: {
                email: { not: null }, // Ensure emails are not null
            },
            select: {
                email: true, // Only fetch emails
            },
        });

        const emailList = reviews.map((review) => review.email).join(", "); // Join emails with commas for BCC

        // Optional: verify transporter is ready
        await transporter.verify();

        // Send the email via BCC
        const info = await transporter.sendMail({
            from: `"Raunak" <raunak@hifromraunak.xyz>`, // Sender's name as "Raunak"
            bcc: emailList, // BCC all the collected emails
            subject, // Hardcoded subject
            text: message, // Hardcoded message content
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
