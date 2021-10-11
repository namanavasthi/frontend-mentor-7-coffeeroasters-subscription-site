import React, { useState, useEffect } from "react";

import { Hamburger } from "./Hamburger";
import { NavList } from "./NavList";

export const Nav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isMobile = windowWidth < 768;

  if (isMobile) return <Hamburger />;

  return <NavList />;
};
