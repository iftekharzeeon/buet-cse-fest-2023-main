import React from "react";

import WaveDesign from "@/components/WaveDesign";
import ButtonCustom from "@/components/ButtonCustom";
import variables from "@/app/variables.module.scss";


export default function HeroSection() {
    return (
        <div className="w-full h-[100vw] md:h-[100vh] flex items-center justify-center relative bg-dlsprint-pattern bg-no-repeat bg-left-bottom bg-cover">
            <WaveDesign position={"bottom-[-2px]"}/>
            <div className="text-center m-auto md:m-10 md:mt-[-25px] p-6 ">
                <h2 className="text-white text-sm md:text-2xl mb-1 sm:mb-3 font-medium">
                    BJIT Presents
                </h2>
                <h1 className="text-white text-base md:text-3xl  font-medium mb-3">
                    BUET CSE FEST 2023 - Deep Learning Sprint 2.0
                </h1>

                <h2 className="text-white text-sm md:text-base mb-1 sm:mb-5">
                    Co-hosted By Bengali.AI
                </h2>
                <h2 className="font-semibold text-white text-sm md:text-base mb-3 sm:mb-5">
                    18 June - 28 July, 2023
                </h2>

                <div className="flex justify-center items-center gap-6">
                    <ButtonCustom bgcolor={variables.colorWhite} textcolor={variables.colorPrimary}>
                        Rules
                    </ButtonCustom>
                    <a href={"https://shorturl.at/ghty4"} target={"_blank"} rel={"noreferrer"}>
                    <ButtonCustom bgcolor={`linear-gradient(to bottom left,${variables.colorTertiary},${variables.colorSecondary},  ${variables.colorPrimary})`} textcolor={variables.colorWhite}>
                        Register
                    </ButtonCustom>
                    </a>
                    <a href={"https://kaggle.com/c/dlsprint2"} target={"_blank"} rel={"noreferrer"}>
                    <ButtonCustom bgcolor={variables.colorWhite} textcolor={variables.colorSecondary}>
                        Kaggle
                    </ButtonCustom>
                    </a>
                </div>
            </div>
        </div>
    );
}