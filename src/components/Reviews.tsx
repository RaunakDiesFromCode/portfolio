import Marquee from "./ui/marquee";
import ReviewCard from "./ReviewCard";
import HeroText from "./HeroText";

const reviews = [
  {
    name: "Sagnik",
    username: "@sagnifyofficial",
    body: "I can do this in DJang too. Lame.",
  },
  {
    name: "Tautik",
    username: "@tautik_sinha",
    body: "You guys will have less jobs. ChatGPT can do this.",
  },
  {
    name: "Swagnik",
    username: "@swagnikganguly",
    body: "Looks decent.",
  },
  {
    name: "Sneha",
    username: "@susneha",
    body: "I was paid to say this. But I love it.",
  },
  {
    name: "Aishwarik",
    username: "@yeaok.itsmee",
    body: "Aughhhhh. :)",
  },
  {
    name: "A prowd client",
    username: "@raunakisannoying",
    body: "This guy is a genius. I love him.",
  },
  {
    name: "Swarnabha",
    username: "@swarnabha19",
    body: "Few people can do this. He is one of them.",
  },
  {
    name: "Rishita",
    username: "@rix_04turtle",
    body: "This guys codes as sharp as his jokes",
  },
  {
    name: "Bristi",
    username: "@sen_bristi_",
    body: "He designes are so good, it makes the internet look bad.",
  },
];

// Helper function to shuffle the reviews array
function shuffleArray(
  array: { name: string; username: string; body: string }[]
) {
  const shuffled = array.slice(); // Create a copy to avoid modifying the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle and split the reviews into two rows
const shuffledReviews = shuffleArray(reviews);
const firstRow = shuffledReviews.slice(
  0,
  Math.ceil(shuffledReviews.length / 2)
);
const secondRow = shuffledReviews.slice(Math.ceil(shuffledReviews.length / 2));

export function MarqueeDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-24">
      <HeroText
        text="What they say..."
        className="pointer-events-none z-50 mb-3 whitespace-pre-wrap bg-foreground bg-clip-text text-center text-4xl md:text-9xl font-bold leading-none text-transparent"
      />
      <div>
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
