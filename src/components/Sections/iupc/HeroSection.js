import React from "react";
import ButtonCustom from "../../ButtonCustom";
import variables from "../../../app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

export default function HeroSection() {
    return (
        <div className="w-full h-[100vw] md:h-[100vh] flex items-center justify-center relative bg-iupc-pattern bg-no-repeat bg-left-bottom bg-cover">
            <WaveDesign position={"bottom-[-2px]"}/>
            <div className="text-center m-auto md:m-10 md:mt-[-25px] p-6 ">
                <h2 className="text-white text-sm md:text-2xl mb-1 sm:mb-3 font-medium">
                    BJIT Presents
                </h2>
                <h1 className="text-white text-base md:text-3xl  font-medium mb-3">
                    BUET CSE FEST 2023
                </h1>

                <h2 className="text-white text-sm md:text-xl  font-medium mb-3">
                    Inter University Programming Contest
                </h2>

                <h2 className="font-semibold text-white text-sm md:text-base mb-3 sm:mb-5">
                    27-28 July, 2023
                </h2>

                <div className="flex justify-center items-center gap-6">
                    <ButtonCustom bgcolor={variables.colorWhite} textcolor={variables.colorPrimary}>
                        Rules
                    </ButtonCustom>
                    <a href="https://forms.gle/27zz6xYPKMLER6SL8" target="_blank" rel="noopener noreferrer">
                    <ButtonCustom bgcolor={`linear-gradient(to bottom left,${variables.colorTertiary},${variables.colorSecondary},  ${variables.colorPrimary})`} textcolor={variables.colorWhite}>
                        Pre Register
                    </ButtonCustom>
                    </a>
                </div>
            </div>
        </div>
    );
}