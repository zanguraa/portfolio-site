import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../../app/globals.css"; // Import your global styles
import React, { useState } from "react";
import BurgerMenu from "@/components/BurgerMenu";
import Slider from "@/components/Slider";

const Works = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuVisible((prev) => !prev);
  };
  return (
    <div className="flex flex-col w-full h-auto bg-[#1E1E1E] min-h-svh	justify-between	box-border z-0">
      <Header onBurgerClick={toggleBurgerMenu} />
      {isBurgerMenuVisible && <BurgerMenu onBurgerClick={toggleBurgerMenu} />}
      <Slider />
      <Footer />
    </div>
  );
};

export default Works;
