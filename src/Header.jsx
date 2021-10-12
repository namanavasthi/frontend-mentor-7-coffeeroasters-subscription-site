import React from "react";

import { Nav } from "./Nav";

import Logo from "./assets/shared/desktop/logo.svg";

export const Header = () => {
  return (
    <header className={`flex flex-row justify-between items-center py-32 w-full`}>
      <img className="w-163 h-18 md:w-auto" src={Logo} alt="coffeeroasters" />
      <Nav />
    </header>
  );
};
