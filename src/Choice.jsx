import React from "react";

import Background from "./assets/about/mobile/bg-quality.png";

import Coffee from "./assets/home/desktop/icon-coffee-bean.svg";
import Gift from "./assets/home/desktop/icon-gift.svg";
import Truck from "./assets/home/desktop/icon-truck.svg";

const ListItem = ({ img, alt, title, description }) => {
  return (
    <li className="bg-primary-100 rounded-xl mb-24 flex flex-col items-center justify-center py-61 text-center text-white px-33">
      <img src={img} alt={alt} />
      <h3 className="pt-56 pb-24 font-fraunces text-24 leading-32 tracking-0">{title}</h3>
      <p className="text-15 leading-25 tracking-0">{description}</p>
    </li>
  );
};

export const Choice = () => {
  return (
    <article className="w-full">
      <header className="flex flex-col items-center text-center relative z-20 bg-primary-300 pt-64 rounded-t-xl">
        <h2 className="text-white font-fraunces text-28 leading-28 pb-24 px-24 ">Why choose us?</h2>
        <p className="text-15 leading-25 tracking-0 text-white text-opacity-80 px-24 pb-28">
          A large part of our role is choosing which particular coffees will be featured in our range. This means
          working closely with the best coffee growers to give you a more impactful experience on every level.
        </p>
      </header>
      <div className="relative">
        <ul className="relative z-20 pt-36 px-24">
          <ListItem
            img={Coffee}
            title="Best quality"
            description="Discover an endless variety of the world's best artisan coffee from each of our roasters."
          />
          <ListItem
            img={Gift}
            title="Exclusive benefits"
            description="Special offers and swag when you subscribe, including 30% off your first shipment."
          />
          <ListItem
            img={Truck}
            title="Free shipping"
            description="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
          />
        </ul>

        <div
          style={{ background: `url(${Background}) repeat`, backgroundSize: "cover" }}
          className="h-1/2 w-full absolute top-0 left-0 z-10 rounded-b-xl overflow-hidden"
        />
        <div className=" bg-gradient-to-b from-primary-400 to-transparent h-1/5 w-full absolute top-0 left-0 z-10 "></div>
      </div>
    </article>
  );
};
