import React from "react";

const ListItem = ({ number, title, description }) => {
  return (
    <li className="flex flex-col items-center pb-56">
      <h2 className="text-72 leading-72 tracking-0 font-fraunces text-neutral-400 pb-24">{number}</h2>
      <h3 className="text-28 leading-32 tracking-0 font-fraunces text-primary-200 pb-24">{title}</h3>
      <h4 className="text-15 leading-25 tracking-0 text-primary-200">{description}</h4>
    </li>
  );
};

export const Works = () => {
  return (
    <article className="flex flex-col items-center text-center">
      <h1 className="pb-80 text-24 leading-32 tracking-0 font-fraunces text-neutral-300">How it works</h1>
      <ul className="pb-23">
        <ListItem
          number="01"
          title="Pick your coffee"
          description="Select from our evolving range of artisan coffees. Our beans are ethically sources and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
        />
        <ListItem
          number="02"
          title="Choose the frequency"
          description="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
        />
        <ListItem
          number="03"
          title="Receive and enjoy!"
          description="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
        />
      </ul>
      <button className="bg-primary-100 text-white text-18 tracking-0 leading-25 font-fraunces px-31 py-15 rounded-md">
        Create your plan
      </button>
    </article>
  );
};
