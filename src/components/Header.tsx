"use client";
import React from "react";
import Image from "next/image";
import FadeIn from "./UseFadeIn";
import Logo from "../assets/icons/logo.png";
import Burger from "../assets/icons/menu_burger.png";
import BurgerMenu from "./BurgerMenu";

interface Props {
  onBurgerClick: () => void;
}

function Header({ onBurgerClick }: Props) {
  return (
    <FadeIn>
      <div className="flex w-full h-auto justify-between p-6 lg:py-8 lg:px-20">
        <a href="/" className="hover:animate-spin">
          <Image src={Logo} alt="Logo" width={32} height={32} />
        </a>

        <Image
          src={Burger}
          alt="Burger"
          width={32}
          height={32}
          className="lg:hidden"
          onClick={onBurgerClick} // Call the onBurgerClick prop on click
        />

        <nav className="hidden flex gap-8 lg:flex">
          <a href="/" className="hover:text-lime-500 hover:scale-x-125">
            Home
          </a>
          <a href="#" className="hover:text-lime-500 hover:scale-x-125">
            About
          </a>
          <a href="/works" className="hover:text-lime-500 hover:scale-x-125">
            Works
          </a>
          <a href="contact" className="hover:text-lime-500 hover:scale-x-125	">
            Contact
          </a>
        </nav>
      </div>
    </FadeIn>
  );
}

export default Header;
