import React from "react";
import Image from "next/image";
import FadeIn from "./UseFadeIn";
import Logo from "../assets/icons/logo.png";
import Burger from "../assets/icons/menu_burger.png";

function Header() {
  return (
    <FadeIn>
    <div className="flex w-full justify-between p-6 lg:py-8 lg:px-20">
      <Image src={Logo} alt="Logo" width={32} height={32} />
      <Image
        src={Burger}
        alt="Burger"
        width={32}
        height={32}
        className="lg:hidden"
      />
      <nav className="hidden flex gap-8 lg:flex">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Works</a>
        <a href="#">Contact</a>
      </nav>
    </div>
    </FadeIn>
  );
}

export default Header;
