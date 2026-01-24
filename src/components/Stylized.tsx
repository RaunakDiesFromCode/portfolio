import React from "react";
import HeroText from "@/components/ui/HeroText";
import TextReveal from "@/components/ui/text-reveal";
import { Mouse } from "lucide-react";
import { codeFont } from "@/app/fonts";

const Stylized = () => {
    return (
        <div>
            <div className="w-screen h-[90vh] flex flex-col items-center justify-between">
                <div className="text-left flex-grow flex flex-col items-center justify-center">
                    <span className={`text-3xl pl-2 ${codeFont.className}`}>
                        Hi from
                    </span>
                    <HeroText text="Raunak" className=" p-0" />
                </div>
                <div className="pb-1 animate-jump">
                    <Mouse />
                </div>
                {/* <Follower /> */}
            </div>
            <div className="z-10 flex min-h-64 justify-start w-full">
                <TextReveal text="I am a web developer from India" />
            </div>
            <div className="z-10 flex min-h-64 justify-end w-full">
                <TextReveal text="What i do defines me" />
            </div>
        </div>
    );
};

export default Stylized;
