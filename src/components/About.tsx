"use client";

import React, { useEffect, useState } from "react";
import Particles from "./ui/particles";
import { useTheme } from "next-themes";
import HeroText from "./HeroText";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Twitter, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="z-50">
        <HeroText
          text="About me"
          className="pointer-events-none mb-3 whitespace-pre-wrap bg-foreground bg-clip-text text-center text-8xl font-bold leading-none text-transparent"
        />

        <div className="flex gap-3 w-full items-center justify-center">
          <div className="h-full flex flex-col gap-3">
            <Card className="w-[380px] shadow-md">
              <CardHeader>
                <CardTitle className="font-bold text-3xl">
                  I am Raunak
                </CardTitle>
                <CardDescription className="text-xl">
                  I make the web beautiful
                </CardDescription>
              </CardHeader>
              <CardContent>
                {
                  "Based in India, I am a web developer who loves to create beautiful and responsive websites. I have been working in the field for over 2 years and have worked with a variety of technologies including ReactJS, NextJS, NodeJS, and more. I am passionate about creating beautiful and responsive websites that are easy to use and look great on all devices. I am always looking for new opportunities to learn and grow as a developer and am excited to see where my career takes me."
                }
              </CardContent>
            </Card>
          </div>

          <div className="h-full flex flex-col gap-3">
            <Card className="w-[350px] p-3 shadow-md">
              <Image
                src={"/me.jpg"}
                alt="me"
                height={1000}
                width={1000}
                className="rounded"
              />
            </Card>

            <Card className="w-[350px] p-3 shadow-md flex justify-center h-[70px]">
              <ul className="flex gap-2 items-center">
                <li>
                  <Button variant="outline">
                    <a
                      href="https://github.com/RaunakDiesFromCode"
                      target="_blank"
                    >
                      <Github />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.linkedin.com/in/raunak-manna/"
                      target="_blank"
                    >
                      <Linkedin />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <a href="https://x.com/RaunakM298742" target="_blank">
                      <Twitter />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.instagram.com/raunakisannoying/"
                      target="_blank"
                    >
                      <Instagram />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <a
                      href="mailto:raunakmanna43@gmail.com&subject=I%20saw%20your%20portfolio"
                      target="_blank"
                    >
                      <Mail />
                    </a>
                  </Button>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default About;
