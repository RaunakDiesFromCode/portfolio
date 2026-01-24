import React from "react";
import HeroText from "./ui/HeroText";
import { codeFont } from "@/app/fonts";

const SKILLS = {
    Languages: [
        "JavaScript & TypeScript",
        "Python",
        "Java",
        "C",
    ],

    Frontend: [
        "React",
        "Next.js",
        "Tailwind CSS",
    ],

    Backend: [
        "Node.js",
        "Express",
        "FastAPI",
    ],

    'Databases & ORM': [
        "PostgreSQL",
        "MongoDB",
        "Prisma",
    ],
};


const Skills = () => {
    return (
        <section
            id="skills"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-24"
        >
            <HeroText
                text="Skills"
                className="pointer-events-none mb-6 whitespace-pre-wrap bg-foreground bg-clip-text text-center font-bold leading-none text-transparent"
            />

            <div className="mt-12 w-full max-w-6xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {Object.entries(SKILLS).map(([category, items]) => (
                        <div
                            key={category}
                            className="group relative rounded-xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all duration-300 hover:border-border"
                        >
                            <p
                                className={`mb-4 text-xs uppercase tracking-widest text-muted-foreground ${codeFont.className}`}
                            >
                                {category}
                            </p>

                            <ul className="space-y-2 text-sm">
                                {items.map((skill) => (
                                    <li
                                        key={skill}
                                        className="text-foreground/80 transition-colors group-hover:text-foreground"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
