// src/app/page.tsx

import React from "react";
import About from "@/components/About";
import Stylized from "@/components/Stylized";
import Projects from "@/components/projects/Projects";
import { MarqueeDemo } from "@/components/review/Reviews";
import ScrollProgress from "@/components/ui/scroll-progress";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";

const page = () => {
    return (
        <div>
            <ScrollProgress />
            <Stylized />
            <div className="flex flex-col items-center">
                <About />
                <Education />
                <Skills />
                <Projects />
                <Achievements />
                <MarqueeDemo />
            </div>
        </div>
    );
};

export default page;
