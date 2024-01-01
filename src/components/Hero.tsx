import React from "react";
import Image from "next/image";
import Profile from "../assets/images/profile.jpg";

// Define the interface for props
interface Props {
  name: string;
}

// Use React.FunctionComponent or React.FC to define the function component
const Hero: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center py-[120px] px-8 lg:flex-row">
      <h1 className="font-['Alerion-Black'] uppercase text-center lg:text-8xl ">
        Hello, I&apos;m {name}
      </h1>
      <div className="flex w-full flex-col gap-8 justify-center items-center ">
        <div className="flex justify-center items-start ">
          <Image
            src={Profile}
            alt="Profile"
            className="rounded-full w-[153px] h-[153px] lg:w-[278px] lg:h-[278px]"
          />
        </div>
        <h2 className="font-['Alerion'] uppercase text-base	text-center	lg:text-xl	">
          A graphic designer focus on UX Design & Branding.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
