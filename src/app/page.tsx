"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Skills from "@/components/Skills";
import BurgerMenu from "../components/BurgerMenu"; // Import your BurgerMenu component
import { NextUIProvider } from "@nextui-org/react";
import AccordionAbout from "@/components/AccordionAbout";
import Contact from "@/components/Contact";

interface Props {
  name: string;
}

export default function Home() {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuVisible((prev) => !prev);
  };

  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between bg-[#1E1E1E]">
        <div className="w-full items-center justify-between font-mono text-sm">
          <Header onBurgerClick={toggleBurgerMenu} />
          {isBurgerMenuVisible && (
            <BurgerMenu onBurgerClick={toggleBurgerMenu} />
          )}
          <Hero name="Barbara" />
          <Skills />
          <SelectedWork />
          <AccordionAbout />
          <Contact />
        </div>
      </main>
    </NextUIProvider>
  );
}
