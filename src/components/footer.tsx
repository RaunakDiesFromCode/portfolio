"use client";
import {
  codeFont,
} from "@/app/fonts";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center cursor-default">
      <hr />
      <div className="text-foreground/60 mt-10 flex items-center justify-center">
        <h1 className="text-xl">
          Made with
          <span className="hover:text-red-500 transition-colors duration-150">
            {" "}
            ♡{" "}
          </span>
          by
          <span> 🅁🄰🅄🄽🄰🄺</span>
        </h1>
      </div>
      <div className="text-right p-0 m-0 md:pr-20 pr-5 pb-5 cursor-pointer">
        <span
          className={codeFont.className}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          back to top
        </span>
      </div>
    </div>
  );
};

export default Footer;
