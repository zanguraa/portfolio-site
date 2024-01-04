import Contact from "@/components/Contact";
import React, { useState } from "react";
import "../../app/globals.css"; // Import your global styles
import Header from "@/components/Header";
import BurgerMenu from "@/components/BurgerMenu";
// Import your BurgerMenuContext

const ContactPage = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuVisible((prev) => !prev);
  };
  return (
    <div className="flex flex-col w-full h-screen z-0">
      <Header onBurgerClick={toggleBurgerMenu} />
      {isBurgerMenuVisible && <BurgerMenu onBurgerClick={toggleBurgerMenu} />}
      <Contact />
    </div>
  );
};

export default ContactPage;
