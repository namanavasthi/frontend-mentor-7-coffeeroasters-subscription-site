import React from "react";

import { Nav } from "./Nav";

import Logo from "./assets/shared/desktop/logo.svg";

export const Header = () => {
  return (
    <header className={`flex flex-row justify-between items-center py-32 md:pt-40 md:pb-52 w-full`}>
      <img className="w-163 h-18 md:w-236 md:h-26" src={Logo} alt="coffeeroasters" />
      <Nav />
    </header>
  );
};
