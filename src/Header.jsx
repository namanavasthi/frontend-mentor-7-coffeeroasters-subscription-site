import React from "react";

import { Nav } from "./Nav";

import Logo from "./assets/shared/desktop/logo.svg";

export const Header = () => {
  return (
    <header className={`flex flex-row justify-between py-10 w-full`}>
      <img className="w-1/2 md:w-auto" src={Logo} alt="coffeeroasters" />
      <Nav />
    </header>
  );
};
