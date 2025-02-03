"use client";
import React from "react";
import Marquee from "./ui/marquee";
import ReviewCard from "./ReviewCard";
import HeroText from "./HeroText";
import { highlightFont } from "@/app/fonts";
import useGitHubAllProjects from "@/hooks/useReviews";
import { ReviewDialog } from "./ReviewForm";
// import NewTabButton from "./NewTabButton";

const OfflineReviews = [
  {
    id: 1,
    name: "Sagnik",
    email: "@sagnifyofficial",
    message: "I can do this in DJang too. Lame.",
  },
  {
    id: 2,
    name: "Tautik",
    email: "@tautik_sinha",
    message: "You guys will have less jobs. ChatGPT can do this.",
  },
  {
    id: 3,
    name: "Swagnik",
    email: "@swagnikganguly",
    message: "Looks decent.",
  },
  {
    id: 4,
    name: "Sneha",
    email: "@susneha",
    message: "I was paid to say this. But I love it.",
  },
  {
    id: 5,
    name: "Aishwarik",
    email: "@yeaok.itsmee",
    message: "Aughhhhh. :)",
  },
  {
    id: 6,
    name: "A prowd client",
    email: "@raunakisannoying",
    message: "This guy is a genius. I love him.",
  },
  {
    id: 7,
    name: "Swarnabha",
    email: "@swarnabha19",
    message: "Few people can do this. He is one of them.",
  },
  {
    id: 8,
    name: "Rishita",
    email: "@rix_04turtle",
    message: "This guys codes as sharp as his jokes",
  },
  {
    id: 9,
    name: "Bristi",
    email: "@sen_bristi_",
    message: "He designes are so good, it makes the internet look bad.",
  },
];

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

  // Determine whether to use offline reviews
  const isOffline = !reviews || error || reviews.length === 0;

  // Use offline reviews when offline
  const displayReviews = isOffline ? OfflineReviews : reviews;

  // Shuffle and split the reviews into two rows
  const shuffledReviews = shuffleArray(displayReviews);
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
        className="pointer-events-none z-50 mb-3 pb-8 whitespace-pre-wrap bg-foreground bg-clip-text text-center text-4xl md:text-9xl font-bold leading-none text-transparent"
      />
      <div className={highlightFont.className}>
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review, index) => (
            <ReviewCard
              key={review.id || index} // Fallback to index for offline reviews
              {...review}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review, index) => (
            <ReviewCard
              key={review.id || index} // Fallback to index for offline reviews
              {...review}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
      <ReviewDialog />
    </div>
  );
}
