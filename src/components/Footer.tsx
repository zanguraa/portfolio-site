import React from "react";
import FadeIn from "./UseFadeIn";

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] w-full flex justify-center gap-2 py-8">
      <FadeIn>
        <h2 className="">Developed By</h2>
        <span className="text-[#B8FF20]">Valeri Zanguri</span>
      </FadeIn>
    </div>
  );
};

export default Footer;
