import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

/* -------------------- POST: Add review -------------------- */
export async function POST(req: Request) {
    try {
        let body;
        try {
            body = await req.json();
        } catch {
            return NextResponse.json(
                { error: "Invalid JSON" },
                { status: 400 }
            );
        }

        const { name, contact, review, rating, newsletter, email } = body;

        if (!name || !review || !rating) {
            return NextResponse.json(
                { error: "Name, review, and rating are required" },
                { status: 400 }
            );
        }

        if (newsletter && !email) {
            return NextResponse.json(
                { error: "Email is required if subscribing to the newsletter" },
                { status: 400 }
            );
        }

        const result = await pool.query(
            `
  INSERT INTO "Review"
    ("id", "name", "contact", "review", "rating", "newsletter", "email")
  VALUES
    ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *;
  `,
            [
                crypto.randomUUID(), // since id is TEXT, not SERIAL
                name,
                contact,
                review,
                rating,
                newsletter ?? false,
                newsletter && email ? email : null,
            ]
        );


        return NextResponse.json(
            { message: "Review added", review: result.rows[0] },
            { status: 201 }
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("POST Error:", error);
        return NextResponse.json(
            { error: error?.message || "Failed to add review" },
            { status: 500 }
        );
    }
}

/* -------------------- GET: Fetch reviews -------------------- */
export async function GET() {
    try {
        const result = await pool.query(`
  SELECT *
  FROM "Review"
  ORDER BY "createdAt" DESC;
`);

        return NextResponse.json(result.rows, { status: 200 });
    } catch (error) {
        console.error("GET Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch reviews" },
            { status: 500 }
        );
    }
}
