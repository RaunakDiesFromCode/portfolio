import React from "react";
import GradualSpacing from "./ui/gradual-spacing";
import { cn } from "@/lib/utils";
import { hero } from "@/app/fonts";

interface HeroTextProps {
  text: string;
  className?: string;
}

const HeroText: React.FC<HeroTextProps> = ({ text, className }) => {
  return (
    <div className="">
      <GradualSpacing text={text} className={cn("font-bold text-4xl", className, hero.className)} />
    </div>
  );
};

export default HeroText;
