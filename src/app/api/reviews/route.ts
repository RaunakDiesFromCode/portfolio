import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// **POST**: Add a new review
export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { name, contact, review, rating, newsletter } = body;

    if (!name || !contact || !review) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newReview = await prisma.review.create({
      data: { name, contact, review, rating, newsletter },
    });

    return NextResponse.json(
      { message: "Review added", review: newReview },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Failed to add review" },
      { status: 500 }
    );
  }
}

// **GET**: Fetch all reviews
export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
