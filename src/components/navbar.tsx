"use client";

import { Moon, Sun } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";
import { Twitter, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        const x = e.clientX;
        const y = e.clientY;

        document.documentElement.style.setProperty("--vt-x", `${x}px`);
        document.documentElement.style.setProperty("--vt-y", `${y}px`);

        if (!document.startViewTransition) {
            setTheme(theme === "light" ? "dark" : "light");
            return;
        }

        document.startViewTransition(() => {
            setTheme(theme === "light" ? "dark" : "light");
        });
    };

    return (
        <div className=" flex justify-between">
            <div className="flex md:flex-row flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={toggleTheme}>
                        {theme === "light" ? (
                            <Sun className="h-[1.5rem] w-[1.3rem]" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </Button>

                    <Button
                        variant="outline"
                        className="hiddden md:block"
                        onClick={() =>
                            document.getElementById("#about")?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        Me
                    </Button>
                </div>
                <Button
                    variant="outline"
                    className="hiddden md:block"
                    onClick={() =>
                        document.getElementById("#projects")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    Projects
                </Button>
                <Button
                    variant="outline"
                    className="hiddden md:block"
                    onClick={() =>
                        document.getElementById("#reviews")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    Reviews
                </Button>
            </div>

            <div>
                <ul className="flex md:flex-row flex-col gap-2 items-center h-[93vh] md:h-full justify-end">
                    <li>
                        <Button variant="outline" asChild size="icon">
                            <a
                                href="https://github.com/RaunakDiesFromCode"
                                target="_blank"
                            >
                                <Github />
                            </a>
                        </Button>
                    </li>
                    <li>
                        <Button variant="outline" asChild size="icon">
                            <a
                                href="https://www.linkedin.com/in/raunak-manna/"
                                target="_blank"
                            >
                                <Linkedin />
                            </a>
                        </Button>
                    </li>
                    <li>
                        <Button variant="outline" asChild size="icon">
                            <a
                                href="https://x.com/RaunakM298742"
                                target="_blank"
                            >
                                <Twitter />
                            </a>
                        </Button>
                    </li>
                    <li>
                        <Button variant="outline" asChild size="icon">
                            <a
                                href="https://www.instagram.com/har.jagah.raunak/"
                                target="_blank"
                            >
                                <Instagram />
                            </a>
                        </Button>
                    </li>
                    <li>
                        <Button variant="outline" asChild size="icon">
                            <a
                                href="mailto:raunakmanna43@gmail.com&subject=I%20saw%20your%20portfolio"
                                target="_blank"
                            >
                                <Mail />
                            </a>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
