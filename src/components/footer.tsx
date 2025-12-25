"use client";
import React from "react";

const Footer = () => {
    return (
        <div className="text-center cursor-default bg-foreground text-background rounded-t-sm">
            <div className="text-foreground/60 py-7 flex items-center justify-center">
                <h1 className="md:text-xl text-lg text-background">
                    Made with
                    <span className="hover:text-red-500 transition-colors duration-150 font-bold">
                        {" "}
                        ♡{" "}
                    </span>
                    by
                    <span> 🅁🄰🅄🄽🄰🄺</span>
                </h1>
            </div>
        </div>
    );
};

export default Footer;
