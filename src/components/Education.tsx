import React from "react";
import HeroText from "./ui/HeroText";
import { Timeline } from "./ui/Timeline";
import { EDUCATION } from "@/data/portfolio";

const Education = () => {
    return (
        <section
            id="education"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-24"
        >
            <HeroText
                text="Education"
                className="pointer-events-none mb-12 whitespace-pre-wrap bg-foreground bg-clip-text text-center font-bold leading-none text-transparent"
            />

            <div className="w-full max-w-3xl flex justify-center md:pl-10">
                <Timeline items={EDUCATION} />
            </div>
        </section>
    );
};

export default Education;
