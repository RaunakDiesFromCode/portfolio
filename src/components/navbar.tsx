"use client";

import React from "react";
import {
    Moon,
    Sun,
    Twitter,
    Github,
    Linkedin,
    Mail,
    Instagram,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const NAV_ITEMS = [
    { label: "Me", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Reviews", id: "reviews" },
];

const SOCIALS = [
    { href: "https://github.com/RaunakDiesFromCode", icon: Github },
    { href: "https://www.linkedin.com/in/raunak-manna/", icon: Linkedin },
    { href: "https://x.com/RaunakM298742", icon: Twitter },
    { href: "https://www.instagram.com/har.jagah.raunak/", icon: Instagram },
    {
        href: "mailto:raunakmanna43@gmail.com?subject=I%20saw%20your%20portfolio",
        icon: Mail,
    },
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        document.documentElement.style.setProperty("--vt-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--vt-y", `${e.clientY}px`);

        const next = theme === "light" ? "dark" : "light";

        if (!document.startViewTransition) {
            setTheme(next);
            return;
        }

        document.startViewTransition(() => setTheme(next));
    };

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <div className="flex items-center justify-between gap-4">
            {/* LEFT */}
            <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={toggleTheme}>
                    {theme === "light" ? (
                        <Sun className="h-5 w-5" />
                    ) : (
                        <Moon className="h-5 w-5" />
                    )}
                </Button>

                {NAV_ITEMS.map(({ label, id }) => (
                    <Button
                        key={id}
                        variant="outline"
                        className="hidden md:inline-flex"
                        onClick={() => scrollTo(id)}
                    >
                        {label}
                    </Button>
                ))}
            </div>

            {/* RIGHT */}
            <ul className="hidden md:flex items-center gap-2">
                {SOCIALS.map(({ href, icon: Icon }) => (
                    <li key={href}>
                        <Button variant="outline" size="icon" asChild>
                            <a href={href} target="_blank" rel="noreferrer">
                                <Icon className="h-4 w-4" />
                            </a>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
