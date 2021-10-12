import React from "react";

import Gran from "./assets/home/desktop/image-gran-espresso.png";
import Planalto from "./assets/home/desktop/image-planalto.png";
import Piccollo from "./assets/home/desktop/image-piccollo.png";
import Danche from "./assets/home/desktop/image-danche.png";

const Item = ({ title, description, img, last }) => {
  return (
    <li className={`flex flex-col items-center text-center text-primary-200 px-23${last ? "" : " pb-48"}`}>
      <img src={img} alt={title} className="w-200 h-151 mb-24" />
      <h2 className="text-24 leading-32 tracking-0 font-fraunces capitalize pb-16">{title}</h2>
      <h3 className="text-15 leading-25 tracking-0">{description}</h3>
    </li>
  );
};

export const Collection = () => {
  return (
    <article className="flex flex-col items-center">
      <div className="relative mb-13">
        <h2 className="text-40 leading-72 tracking-0 font-fraunces text-neutral-300">our collection</h2>
        <div className="absolute z-10 w-full h-full top-0 bg-gradient-to-b from-transparent to-neutral-100"></div>
      </div>

      <ul className="flex flex-col items-center">
        <Item
          img={Gran}
          title="gran espresso"
          description="Light and falvorful blend with cocoa and black pepper for an intense experience"
        />
        <Item
          img={Planalto}
          title="planalto"
          description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
        />
        <Item
          img={Piccollo}
          title="piccollo"
          description="Mild and smooth blend featuring notes of toasted almond and dried cherry"
        />
        <Item
          last={true}
          img={Danche}
          title="danche"
          description="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
        />
      </ul>
    </article>
  );
};
