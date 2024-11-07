import React from "react";
import GradualSpacing from "./ui/gradual-spacing";
import { cn } from "@/lib/utils";
import { heroFont } from "@/app/fonts";

interface HeroTextProps {
  text: string;
  className?: string;
}

const HeroText: React.FC<HeroTextProps> = ({ text, className }) => {
  return (
    <div className="">
      <GradualSpacing
        text={text}
        className={cn(
          "font-bold text-6xl md:text-9xl text-center truncate", // Responsive font sizes
          className,
          heroFont.className
        )}
      />
    </div>
  );
};

export default HeroText;
