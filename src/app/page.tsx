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
      <About />
      <Projects />
      <MarqueeDemo />
    </div>
  );
};

export default page;
