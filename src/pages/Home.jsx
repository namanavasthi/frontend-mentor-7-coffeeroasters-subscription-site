import React from "react";

import { Section } from "../Section";
import { Hero } from "../Hero";
import { Collection } from "../Collection";

export const Home = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Collection />
      </Section>
    </>
  );
};
