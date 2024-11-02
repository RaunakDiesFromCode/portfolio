import React from "react";
import HeroText from "@/components/HeroText";
import TextReveal from "@/components/ui/text-reveal";
import { Mouse } from "lucide-react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { subheading } from "@/app/fonts";

const skills =
  "Web Android NextJS ReactJS CSS HTML5 NodeJS Prisma Postgres UI/UX Tailwind Typescript Javascript Java C C++ Python ML DSA Firebase DJango ".split(
    " "
  );

const Stylized = () => {
  return (
    <div>
      <div className="w-screen h-[90vh] flex flex-col items-center justify-between">
        <div className="text-left flex-grow flex flex-col items-center justify-center">
          <span className={`text-3xl pl-2 ${subheading.className}`}>
            Hi from
          </span>
          <HeroText text="Raunak" className="text-9xl p-0" />
        </div>
        <div className="pb-1">
          <Mouse />
        </div>
      </div>
      <div className="z-10 flex min-h-64 justify-start w-full">
        <TextReveal text="I am a web developer from India" />
      </div>
      <div className="z-10 flex min-h-64 justify-end w-full">
        <TextReveal text="What i do defines me" />
      </div>

      <div className="opacity-50">
        <VelocityScroll
          text={skills.sort(() => Math.random() - 0.5).join(" ")}
          default_velocity={1}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
        <VelocityScroll
          text={skills.sort(() => Math.random() - 0.5).join(" ")}
          default_velocity={1}
          className={`font-display text-center text-4xl italic font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] ${subheading.className}`}
        />
      </div>
    </div>
  );
};

export default Stylized;
