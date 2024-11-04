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
  // {
  //   name: "Bristi",
  //   username: "@sen_bristi_",
  //   body: "Few people can do this. He is one of them.",
  // },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


export function MarqueeDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-24">
      <HeroText
        text="What they say..."
        className="pointer-events-none mb-3 whitespace-pre-wrap bg-foreground bg-clip-text text-center text-8xl font-bold leading-none text-transparent"
      />
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
  );
}
