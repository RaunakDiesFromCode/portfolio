"use client"
import React from "react";
import Marquee from "./ui/marquee";
import ReviewCard from "./ReviewCard";
import HeroText from "./HeroText";
import { codeFont, highlightFont } from "@/app/fonts";
import useGitHubAllProjects from "@/hooks/useReviews";
import { Button } from "./ui/button";
import Link from "next/link";

// Helper function to shuffle the reviews array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = array.slice(); // Create a copy to avoid modifying the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function MarqueeDemo() {
  const { projects: reviews, error } = useGitHubAllProjects();

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading reviews...
      </div>
    );
  }

  // Shuffle and split the reviews into two rows
  const shuffledReviews = shuffleArray(reviews);
  const firstRow = shuffledReviews.slice(
    0,
    Math.ceil(shuffledReviews.length / 2)
  );
  const secondRow = shuffledReviews.slice(
    Math.ceil(shuffledReviews.length / 2)
  );

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-24">
      <HeroText
        text="What they say..."
        className="pointer-events-none z-50 mb-3 whitespace-pre-wrap bg-foreground bg-clip-text text-center text-4xl md:text-9xl font-bold leading-none text-transparent"
      />
      <div className={highlightFont.className}>
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
      <Button asChild variant="outline" className={codeFont.className}>
        <Link href={"https://portfolio-backend-rdsn.onrender.com/"}>
          Review me
        </Link>
      </Button>
    </div>
  );
}
