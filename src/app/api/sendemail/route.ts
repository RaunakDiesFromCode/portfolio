import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { pool } from "@/lib/db";
import fetchAllGithubProjects from "@/lib/fetchGithubProjects";
import getEmailTemplate from "./emailTemplate";

const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME!;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD!;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
});

export async function POST() {
    try {
        /* ---------------- Subject & fallback text ---------------- */
        const subject = `Monthly Newsletter for ${new Date().toLocaleString(
            "default",
            { month: "long" }
        )}`;

        const message =
            "This is the hardcoded message content that will be sent to all reviewers.";

        /* ---------------- Fetch emails (RAW SQL) ---------------- */
        const emailResult = await pool.query(`
      SELECT email
      FROM "Review"
      WHERE email IS NOT NULL;
    `);

        if (emailResult.rows.length === 0) {
            return NextResponse.json(
                { error: "No emails found" },
                { status: 404 }
            );
        }

        const emailList = emailResult.rows.map((row) => row.email).join(", ");

        /* ---------------- Fetch GitHub projects ---------------- */
        let projects;
        try {
            projects = await fetchAllGithubProjects();
        } catch (error) {
            console.error("Error fetching GitHub projects:", error);
            return NextResponse.json(
                { error: "Failed to fetch GitHub projects" },
                { status: 500 }
            );
        }

        if (!projects || projects.length === 0) {
            return NextResponse.json(
                { error: "No projects found" },
                { status: 404 }
            );
        }

        const randomProjects = projects
            .sort(() => 0.3 - Math.random())
            .slice(0, 3);

        const emailTemplate = getEmailTemplate(randomProjects);

        /* ---------------- Send email ---------------- */
        await transporter.verify();

        const sender = `"Raunak" <raunak@hifromraunak.xyz>`;

        const info = await transporter.sendMail({
            from: sender,
            to: sender, // required by Gmail
            bcc: emailList, // actual recipients
            subject,
            html: emailTemplate,
            text: message,
        });

        return NextResponse.json({
            success: true,
            messageId: info.messageId,
        });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("🔥 Mail send failed:", error?.message || error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
