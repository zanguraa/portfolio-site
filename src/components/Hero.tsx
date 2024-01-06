"use client";
import React from "react";
import Image from "next/image";
import Profile from "../assets/images/profile.jpg";
import FadeIn from "./UseFadeIn";
import { TypeAnimation } from "react-type-animation";

// Define the interface for props
interface Props {
  name: string;
}

// Use React.FunctionComponent or React.FC to define the function component
const Hero: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center py-[50px] px-8 lg:px-20 lg:flex-row">
      <FadeIn>
        <h1 className="font-['Alerion-Black'] text-white uppercase text-center lg:text-8xl ">
          Hello, I&apos;m {name}
        </h1>
      </FadeIn>
      <div className="flex w-full flex-col gap-10 justify-center items-center ">
        <div className="flex justify-center items-center px-4 py-4">
          <FadeIn>
            <Image
              src={Profile}
              alt="Profile"
              className="rounded-full w-[153px] lg:w-[278px] object-cover	hover:scale-150		"
            />
          </FadeIn>
        </div>
        <FadeIn>
          <h2 className="font-['Alerion'] uppercase text-white text-base	text-center	lg:text-xl	">
            <TypeAnimation
              sequence={[
                "A graphic designer", // Types 'One'
                1000, // Waits 1s
                "A graphic designer focus on", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "A graphic designer focus on UX Design",
                2000, // Types 'Three' without deleting 'Two'
                "A graphic designer focus on UX Design & Branding.",
              ]}
              wrapper="span"
              cursor={true}
            />
          </h2>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
