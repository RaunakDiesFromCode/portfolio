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

    const { name, contact, review, rating, newsletter, email } = body;

    if (!name || !review || !rating) {
      return NextResponse.json(
        { error: "Name, review, and rating are required" },
        { status: 400 }
      );
    }

    // If user opts for newsletter, make sure email is provided
    if (newsletter && !email) {
      return NextResponse.json(
        { error: "Email is required if subscribing to the newsletter" },
        { status: 400 }
      );
    }

    const newReview = await prisma.review.create({
        data: {
            name,
            contact,
            review,
            rating,
            newsletter,
            email: newsletter && email ? email : null, // ensure null is saved if not subscribed
        },
    });



    return NextResponse.json(
      { message: "Review added", review: newReview },
      { status: 201 }
    );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
  console.error("POST Error:", error?.message || error);
  return NextResponse.json(
    { error: error?.message || "Failed to add review" },
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
