// src/app/page.tsx

import React from "react";
import About from "@/components/About";
import Stylized from "@/components/Stylized";
import Projects from "@/components/Projects";
import { MarqueeDemo } from "@/components/Reviews";

const page = () => {
  return (
    <div>
      <Stylized />
      <div className="flex flex-col items-center">
        <About />
        <Projects />
        <MarqueeDemo />
      </div>
    </div>
  );
};

export default page;
