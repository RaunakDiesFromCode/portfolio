import {
  codeFont,
  dotoFont,
  heroFont,
  playfairFont,
  unifrakturcookFont,
} from "@/app/fonts";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center cursor-default">
      <div className="text-foreground/60">
        <h1 className="translate-y-36 text-xl">
          Made with
          <span className="hover:text-red-500 transition-colors duration-150"> ♡ </span>
          by
        </h1>
        <h1 className=" text-[20vw] p-0 m-0 ">
          <span className={playfairFont.className}>R</span>
          <span className={heroFont.className}>a</span>
          <span className="underline">u</span>
          <span className={unifrakturcookFont.className}>n</span>
          <span className={codeFont.className}>a</span>
          <span className={dotoFont.className}>k</span>
          <span className="text-cyan-400">.</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
