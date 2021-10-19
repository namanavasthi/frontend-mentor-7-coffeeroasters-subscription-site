import React, { useState, useEffect } from "react";

import Mobile from "./assets/home/mobile/image-hero-coffeepress.jpg";
import Tablet from "./assets/home/tablet/image-hero-coffeepress.jpg";
import Desktop from "./assets/home/desktop/image-hero-coffeepress.jpg";

export const Hero = () => {
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

  const state = windowWidth < 768 ? "mobile" : windowWidth >= 768 && windowWidth <= 1024 ? "tablet" : "desktop";

  return (
    <article
      className="flex flex-col items-center justify-center h-500 rounded-2xl text-white text-center"
      style={{
        background: `no-repeat url(${state === "mobile" ? Mobile : state === "tablet" ? Tablet : Desktop})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="font-fraunces text-40 leading-40 pb-25">Great coffee made simple.</h1>
      <h2 className="text-15 leading-25 tracking-0 opacity-80 pb-40 px-24">
        Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best
        roasters delivered directly to your door, at your schedule.
      </h2>
      <button className="bg-primary-100 rounded-xl py-15 px-30 text-18 leading-25 tracking-0 font-fraunces">
        Create your plan
      </button>
    </article>
  );
};
