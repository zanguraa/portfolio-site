import React from "react";
import RunningText from "./RunningText";
import Image from "next/image";
import LogoBlack from "../assets/icons/logo_black.png";
import FadeIn from "./UseFadeIn";

const Skills = () => {
  const skills = [
    "Branding",
    "UX/UI Design",
    "Web Design",
    "Graphic Design",
    "Illustration",
  ];

  return (
    <FadeIn>
      <div className="bg-[#B8FF20] px-6 py-8">
        <RunningText $dark={true}>
          <div className="flex items-center gap-4">
            {skills.map((skill, index) => (
              <React.Fragment key={index}>
                <Image
                  src={LogoBlack}
                  alt="Logo"
                  width={32}
                  height={32}
                  className="mx-2"
                />
                <span>{skill}</span>
                {index == skills.length - 1 && ( // if not last item
                  <span className="mx-2"></span>
                )}
              </React.Fragment>
            ))}
          </div>
        </RunningText>
      </div>
    </FadeIn>
  );
};

export default Skills;
