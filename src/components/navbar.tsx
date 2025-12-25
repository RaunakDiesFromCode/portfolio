"use client";

import React, { useState } from "react";
import {
    Moon,
    Sun,
    Twitter,
    Github,
    Linkedin,
    Mail,
    Instagram,
    Copy,
    Check,
    X,
    Terminal,
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

function getInstallCommand() {
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    // Windows (including WSL edge cases)
    if (platform.includes("win") || userAgent.includes("windows")) {
        return "irm https://hifromraunak.vercel.app/run.ps1 | iex";
    }

    // macOS
    if (platform.includes("mac")) {
        return "sh <(curl -fsSL https://hifromraunak.vercel.app/run.sh)";
    }

    // Linux
    if (platform.includes("linux")) {
        return "sh <(curl -fsSL https://hifromraunak.vercel.app/run.sh)";
    }

    // Fallback (unknown OS)
    return "Unsupported OS";
}

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [copied, setCopied] = useState(false);
    const [visible, setVisible] = useState(true);

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
        <nav className="flex justify-between h-[96dvh]">
            {/* LEFT */}
            <div className="flex flex-col md:flex-row gap-2">
                <div className="flex items-start gap-2">
                    <Button variant="outline" size="icon" onClick={toggleTheme}>
                        {theme === "light" ? (
                            <Sun className="h-[1.5rem] w-[1.3rem]" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </Button>

                    {NAV_ITEMS.map(({ label, id }) => (
                        <Button
                            key={id}
                            variant="outline"
                            className="hidden md:block"
                            onClick={() => scrollTo(id)}
                        >
                            {label}
                        </Button>
                    ))}
                </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end justify-end gap-2 h-full">
                <ul className="flex flex-col md:flex-row gap-2 md:h-full justify-end">
                    {SOCIALS.map(({ href, icon: Icon }) => (
                        <li key={href}>
                            <Button variant="outline" size="icon" asChild>
                                <a href={href} target="_blank" rel="noreferrer">
                                    <Icon />
                                </a>
                            </Button>
                        </li>
                    ))}
                </ul>

                <div className="relative">
                    {/* Terminal panel */}
                    <div
                        className={`
            hidden md:flex flex-col gap-2
            rounded border border-input/50 bg-accent/40
            p-1 pt-2 backdrop-blur-sm max-w-[420px]
            transition-all duration-300 ease-out
            ${
                visible
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 translate-x-6 pointer-events-none"
            }
        `}
                    >
                        <div className="flex items-center justify-between px-2">
                            <span className="text-xs text-muted-foreground">
                                I&apos;m already in your terminal!
                            </span>
                            <button
                                className="text-muted-foreground"
                                onClick={() => setVisible(false)}
                            >
                                <X size={17} />
                            </button>
                        </div>

                        <div className="flex items-center gap-2 rounded bg-background/80 border border-input/70 px-3 py-2 font-mono text-xs text-foreground">
                            <span className="truncate select-all">
                                {getInstallCommand()}
                            </span>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 shrink-0"
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        getInstallCommand()
                                    );
                                    setCopied(true);
                                    setTimeout(() => setCopied(false), 2000);
                                }}
                            >
                                {copied ? (
                                    <Check className="h-4 w-4 text-emerald-500" />
                                ) : (
                                    <Copy className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Terminal button */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setVisible((v) => !v)}
                        className={`
            absolute bottom-0 right-0
            transition-all duration-300 ease-out
            ${
                visible
                    ? "opacity-0 scale-95 pointer-events-none"
                    : "opacity-100 scale-100"
            }
        `}
                    >
                        <Terminal />
                    </Button>
                </div>
            </div>
        </nav>
    );
}
