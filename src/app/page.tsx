// src/app/page.tsx

import React from "react";
import About from "@/components/About";
import Stylized from "@/components/Stylized";
import Projects from "@/components/Projects";
import { MarqueeDemo } from "@/components/Reviews";
import ScrollProgress from "@/components/ui/scroll-progress";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";

const page = () => {
  return (
    <div>
      <ScrollProgress/>
      <Stylized />
      <div className="flex flex-col items-center">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <MarqueeDemo />
      </div>
    </div>
  );
};

export default page;
