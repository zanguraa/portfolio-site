import Contact from "@/components/Contact";
import React, { useState } from "react";
import "../../app/globals.css"; // Import your global styles
import Header from "@/components/Header";
import BurgerMenu from "@/components/BurgerMenu";
import Footer from "@/components/Footer";
// Import your BurgerMenuContext

const ContactPage = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuVisible((prev) => !prev);
  };
  return (
    <div className="flex flex-col w-full h-auto bg-[#1E1E1E] min-h-svh	justify-between	 z-0">
      <Header onBurgerClick={toggleBurgerMenu} />
      {isBurgerMenuVisible && <BurgerMenu onBurgerClick={toggleBurgerMenu} />}
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
