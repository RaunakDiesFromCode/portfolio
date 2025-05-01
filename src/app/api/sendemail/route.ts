import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import prisma from "@/lib/prisma"; // Assuming you're using Prisma for DB access
import fetchAllGithubProjects from "@/lib/fetchGithubProjects";
import getEmailTemplate from "./emailTemplate";

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

        // Check if there are any emails to send to
        if (reviews.length === 0) {
            console.error("No emails found");
            return NextResponse.json(
                { error: "No emails found" },
                { status: 404 }
            );
        }


        let projects = [];

        try {
            projects = await fetchAllGithubProjects();

            if (projects.length === 0) {
                console.error("No projects found");
                return NextResponse.json(
                    { error: "No projects found" },
                    { status: 404 }
                );
            }
        }
        catch (error) {
            console.error("Error fetching GitHub projects:", error);
            return NextResponse.json(
                { error: "Failed to fetch GitHub projects" },
                { status: 500 }
            );
        }

        // get 5 random projects from the array
        const randomProjects = projects
            .sort(() => 0.3 - Math.random())
            .slice(0, 3);


        // Create a string of project links

        console.log("Random Projects:", randomProjects);

        const emailTemplate = getEmailTemplate(randomProjects); // Generate the email template

        const emailList = reviews.map((review) => review.email).join(", "); // Join emails with commas for BCC

        // Optional: verify transporter is ready
        await transporter.verify();

        const sender = `"Raunak" <raunak@hifromraunak.xyz>`; // Sender's name and email

        // Send the email via BCC
        const info = await transporter.sendMail({
            from: sender, // Sender's name as "Raunak"
            to : sender,
            bcc: emailList, // BCC all the collected emails
            subject, // Hardcoded subject
            html: emailTemplate, // Use the generated email template
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
