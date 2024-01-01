import React from "react";
import Image from "next/image";

import Logo from "../assets/icons/logo.png";
import Burger from "../assets/icons/menu_burger.png";

function Header() {
  return (
    <div className="flex w-full justify-between p-6">
      <Image src={Logo} alt="Logo" width={32} height={32} />
      <Image src={Burger} alt="Burger" width={32} height={32} />
    </div>
  );
}

export default Header;
