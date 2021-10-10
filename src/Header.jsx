import React from "react";

import { Nav } from "./Nav";

import { ReactComponent as Logo } from "./assets/shared/desktop/logo.svg";

export const Header = () => {
  return (
    <header className={`flex flex-row justify-between py-10 w-full`}>
      <Logo />
      <Nav />
    </header>
  );
};
