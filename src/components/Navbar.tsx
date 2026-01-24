"use client";

import React, { useEffect, useState } from "react";
import {
    Moon,
    Sun,
    Twitter,
    Github,
    Linkedin,
    Mail,
    Instagram,
    Menu,
    X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import clsx from "clsx";

const NAV_ITEMS = [
    { label: "Me", id: "about" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
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
    const [open, setOpen] = useState(false);

    /* 🔒 LOCK BODY SCROLL WHEN MENU IS OPEN */
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

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

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <header className="relative z-50">
            <div className="flex items-center justify-between gap-3">
                {/* LEFT */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleTheme}
                        className="transition-transform active:scale-95"
                    >
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

                {/* RIGHT (DESKTOP) */}
                <ul className="hidden md:flex items-center gap-2">
                    {SOCIALS.map(({ href, icon: Icon }) => (
                        <li key={href}>
                            <Button
                                variant="outline"
                                size="icon"
                                asChild
                                className="transition-transform active:scale-95"
                            >
                                <a href={href} target="_blank" rel="noreferrer">
                                    <Icon className="h-4 w-4" />
                                </a>
                            </Button>
                        </li>
                    ))}
                </ul>

                {/* MOBILE HAMBURGER */}
                <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden fixed top-4 right-4 z-[60]"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </Button>
            </div>

            {/* MOBILE FULLSCREEN MENU */}
            <div
                className={clsx(
                    "fixed inset-0 z-40 md:hidden",
                    "bg-background/70 backdrop-blur-2xl",
                    "transition-opacity duration-300 ease-out",
                    open
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none",
                )}
                onClick={() => setOpen(false)}
            >
                <div
                    className="flex h-full flex-col justify-center px-6 gap-2"
                    onClick={(e) => e.stopPropagation()}
                >
                    {NAV_ITEMS.map(({ label, id }, i) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            style={{ transitionDelay: `${i * 40}ms` }}
                            className={clsx(
                                "rounded-md px-3 py-2 text-left",
                                "transition-all duration-300",
                                open
                                    ? "translate-y-0 opacity-100 text-4xl"
                                    : "-translate-y-2 opacity-0 text-2xl",
                            )}
                        >
                            {label}
                        </button>
                    ))}

                    <div className="mt-6 flex gap-3 w-full justify-center">
                        {SOCIALS.map(({ href, icon: Icon }, i) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                style={{ transitionDelay: `${i * 40}ms` }}
                                className={clsx(
                                    "rounded-md border p-3",
                                    "transition-all duration-300",
                                    open
                                        ? "scale-100 opacity-100"
                                        : "scale-95 opacity-0",
                                    "hover:bg-muted",
                                )}
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
