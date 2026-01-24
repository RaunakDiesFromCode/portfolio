"use client";

import React from "react";
import HeroText from "./ui/HeroText";
import clsx from "clsx";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { codeFont } from "@/app/fonts";
import { ACHIEVEMENTS } from "@/data/portfolio";

const Achievements = () => {
    const [expanded, setExpanded] = React.useState(false);


    const visibleItems = expanded ? ACHIEVEMENTS : ACHIEVEMENTS.slice(0, 4);

    return (
        <section
            id="achievements"
            className="relative flex min-h-screen w-full flex-col items-center justify-center pt-24"
        >
            <HeroText
                text="Achievements"
                className="pointer-events-none mb-10 bg-foreground bg-clip-text text-center font-bold text-transparent"
            />

            <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
                {visibleItems.map((item) => (
                    <Card
                        key={item.id}
                        className="group transition-colors hover:border-foreground/40"
                    >
                        <CardHeader className="pb-2">
                            {/* Type tag */}
                            <span
                                className={clsx(
                                    "mb-2 inline-block w-fit rounded px-2 py-0.5 text-[10px] tracking-widest",
                                    item.type === "competition"
                                        ? "bg-blue-500/10 text-blue-400"
                                        : "bg-emerald-500/10 text-emerald-400",
                                )}
                            >
                                {item.type.toUpperCase()}
                            </span>

                            <CardTitle className="text-sm">
                                {item.title}
                            </CardTitle>

                            <CardDescription
                                className={`text-xs ${codeFont.className} mt-1 text-primary/80`}
                            >
                                {"authority" in item
                                    ? item.authority
                                    : item.role}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="pt-0">
                            <p className="text-xs text-foreground/70">
                                {item.description}
                            </p>

                            <p className="mt-3 text-[10px] tracking-widest text-muted-foreground">
                                {item.year}
                            </p>
                        </CardContent>
                    </Card>
                ))}

                {ACHIEVEMENTS.length > 4 && (
                    <button
                        onClick={() => setExpanded((v) => !v)}
                        className="
                            md:col-span-2
                            mx-auto
                            pt-4
                            text-xs
                            tracking-widest
                            text-muted-foreground
                            transition-colors
                            hover:text-foreground
                        "
                    >
                        {expanded ? "SHOW LESS" : "SHOW MORE"}
                    </button>
                )}
            </div>
        </section>
    );
};

export default Achievements;
