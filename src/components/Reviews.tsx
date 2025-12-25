"use client";
import React, { useEffect, useState } from "react";
import Marquee from "./ui/marquee";
import ReviewCard from "./ReviewCard";
import HeroText from "./HeroText";
import { highlightFont } from "@/app/fonts";
import { ReviewDialog } from "./ReviewForm";
import { Review } from "@/lib/types";

// Fallback offline reviews with unique IDs
const OfflineReviews: Review[] = [
  {
    id: "offline-1",
    name: "Sagnik",
    contact: "@sagnifyofficial",
    review: "I can do this in Django too. Lame.",
    rating: 3,
  },
  {
    id: "offline-2",
    name: "Tautik",
    contact: "@tautik_sinha",
    review: "You guys will have fewer jobs. ChatGPT can do this.",
    rating: 2,
  },
  {
    id: "offline-3",
    name: "Swagnik",
    contact: "@swagnikganguly",
    review: "Looks decent.",
    rating: 4,
  },
  {
    id: "offline-4",
    name: "Sneha",
    contact: "@susneha",
    review: "I was paid to say this. But I love it.",
    rating: 5,
  },
  {
    id: "offline-5",
    name: "A proud client",
    contact: "@raunakisannoying",
    review: "This guy is a genius. I love him.",
    rating: 5,
  },
  {
    id: "offline-6",
    name: "Swarnabha",
    contact: "@swarnabha19",
    review: "Few people can do this. He is one of them.",
    rating: 4,
  },
  {
    id: "offline-7",
    name: "Rishita",
    contact: "@rix_04turtle",
    review: "This guy codes as sharp as his jokes.",
    rating: 4,
  },
  {
    id: "offline-8",
    name: "Bristi",
    contact: "@sen_bristi_",
    review: "His designs are so good, they make the internet look bad.",
    rating: 5,
  },
];

// Helper function to shuffle reviews
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export function MarqueeDemo() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();

        // Ensure each review has an ID
        const apiReviews: Review[] = data
          .filter(
            (r: Review) =>
              r.name && r.contact && r.review && typeof r.rating === "number"
          )
          .map((r: Review) => ({
            id: r.id || `api-${crypto.randomUUID()}`,
            name: r.name,
            contact: r.contact,
            review: r.review,
            rating: r.rating,
          }));

        // Merge offline and API reviews
        const combinedReviews = [...OfflineReviews, ...apiReviews];

        // Shuffle and update state
        setReviews(shuffleArray(combinedReviews));
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews(shuffleArray(OfflineReviews)); // Show only offline if API fails
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  // Split reviews into two rows for marquee
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-24" id="#reviews">
      <HeroText
        text="What they say..."
        className="pointer-events-none z-40 mb-3 pb-8 whitespace-pre-wrap bg-foreground bg-clip-text text-center text-4xl md:text-9xl font-bold leading-none text-transparent"
      />
      <div className={highlightFont.className}>
        {loading ? (
          <p className="text-center text-lg">Loading reviews...</p>
        ) : (
          <>
            <Marquee pauseOnHover className="[--duration:30s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Marquee>
          </>
        )}
      </div>
      <ReviewDialog />
    </div>
  );
}
