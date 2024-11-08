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
import {
  Twitter,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "./ui/button";
import { highlightFont } from "@/app/fonts";

const About = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div
      className={`relative flex md:h-screen md:w-full w-[80vw] flex-col items-center justify-center overflow-hidden mt-20 md:mt-0 ${highlightFont.className}`}
    >
      <div className="z-20">
        <HeroText
          text="About me"
          className="pointer-events-none mb-3 whitespace-pre-wrap bg-foreground bg-clip-text text-center font-bold leading-none text-transparent"
        />

        <div className="flex md:flex-row flex-col gap-3 justify-center px-2 md:px-0">
          {/* Left Div */}
          <Card className="md:w-[380px] shadow-md md:h-full ">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">I am Raunak</CardTitle>
              <CardDescription className="text-xl">
                I make the web beautiful
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              {
                "Based in India, I am a web developer who loves to create beautiful and responsive websites. I have been working in the field for over 2 years and have worked with a variety of technologies including ReactJS, NextJS, NodeJS, and more. I am passionate about creating beautiful and responsive websites that are easy to use and look great on all devices. I am always looking for new opportunities to learn and grow as a developer and am excited to see where my career takes me."
              }
            </CardContent>
          </Card>

          {/* Right Div */}
          <div className="h-full flex flex-col gap-3 justify-center md:w-[350px]">
            <Card className=" p-3 shadow-md">
              <Image
                src={"/me.jpg"}
                alt="me"
                height={1000}
                width={1000}
                className="rounded-[5px]"
              />
            </Card>

            <Card className=" p-3 shadow-md flex justify-center h-[94px]">
              <ul className="flex gap-2 items-center">
                <li>
                  <Button variant="outline" asChild size="icon">
                    <a
                      href="https://github.com/RaunakDiesFromCode"
                      target="_blank"
                    >
                      <Github/>
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
                    <a href="https://x.com/RaunakM298742" target="_blank">
                      <Twitter />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild size="icon">
                    <a
                      href="https://www.instagram.com/raunakisannoying/"
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
                <li>
                  <Button variant="outline" asChild size="icon">
                    <a
                      href="mailto:raunakmanna43@gmail.com&subject=I%20saw%20your%20portfolio"
                      target="_blank"
                    >
                      <Facebook />
                    </a>
                  </Button>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Particles
        className="absolute inset-0 "
        quantity={400}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default About;
