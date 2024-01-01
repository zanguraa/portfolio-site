import React from "react";
import RunningText from "./RunningText";
import Image from "next/image";
import LogoBlack from "../assets/icons/logo_black.png";

const Skills = () => {
  return (
    <div className="bg-[#B8FF20] px-6 py-8">
      <RunningText $dark={true}>
        <div className="flex items-center gap-4">
          <Image src={LogoBlack} alt="Logo" width={32} height={32} />
          <p>Branding</p>
        </div>
      </RunningText>
    </div>
  );
};

export default Skills;
