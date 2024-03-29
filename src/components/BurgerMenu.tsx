import React from "react";

interface HeaderProps {
  onBurgerClick: () => void; // Define the prop type for onBurgerClick
}

const BurgerMenu = ({ onBurgerClick }: HeaderProps) => {
  return (
    <div className="flex w-full h-screen z-10  justify-end items-start absolute top-0 backdrop-blur-lg ">
      <nav className=" flex flex-col gap-8 w-[90%] h-screen items-center bg-[#1E1E1E] py-20 ">
        <a className="text-2xl	text-white" href="/">
          Home
        </a>
        <a className="text-2xl	text-white" href="#">
          About
        </a>
        <a className="text-2xl	text-white" href="works">
          Works
        </a>
        <a className="text-2xl	text-white" href="contact">
          Contact
        </a>
      </nav>
      <button className="absolute top-8 right-8" onClick={onBurgerClick}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L26 26M26 6L6 26"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default BurgerMenu;
