import React from "react";
import FadeIn from "./UseFadeIn";
import projectsData from "../../data/projects.json";
import Image from "next/image";
import arrow from "../assets/icons/arrow_right.png";

const SelectedWork = () => {
  const projects = projectsData;

  return (
    <div className="w-full my-20">
      <FadeIn>
        <div className="flex flex-col justify-center items-center gap-4 w-full h-auto">
          <h2 className="text-[40px] text-white">Selected Works</h2>
          <p className="text-white">Here are some of my selected works</p>
        </div>
      </FadeIn>

      <div className="flex flex-wrap w-full justify-center ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center py-10"
          >
            <FadeIn>
              <div className=" px-6 min-w-96 max-w-xs md:max-w-lg 2xl:max-w-2xl	 h-[480px]">
                <Image
                  width={480}
                  height={480}
                  src={project.image}
                  alt={project.name}
                  className="rounded-3xl h-full object-cover"
                />
              </div>

              <div className="absolute rounded-[39px] backdrop-blur-sm bg-black/30 width-[36px] h-auto top-14 right-8 px-[2rem] py-2">
                <h3 className="text-white font-['Alerion-Black'] ">
                  {project.year}
                </h3>
              </div>

              <div className="absolute bottom-6 left-8 w-[180px] px-6 py-6 bg-black text-black rounded-3xl flex flex-col justify-center items-center  backdrop-blur-sm bg-black/30">
                <h3 className="text-xl text-white bold font-['Alerion-Bold'] uppercase ">
                  {project.name}
                </h3>
                <p className="text-white font-['Alerion-Black']">
                  {project.description}
                </p>
              </div>
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  className="absolute bottom-6 right-8 w-[56px] h-[56px]  bg-black text-black rounded-full flex flex-col justify-center items-center  backdrop-blur-sm bg-black/30"
                >
                 <Image src={arrow} alt="arrow" />
                </a>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedWork;
