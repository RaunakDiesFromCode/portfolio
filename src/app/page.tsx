import React from "react";
import About from "@/components/About";
import Stylized from "@/components/Stylized";
import Projects from "@/components/Projects";

const page = () => {
  return (
    <div>
      <Stylized />
      <About />
      <Projects />
    </div>
  );
};

export default page;
