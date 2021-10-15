import React from "react";

import { Section } from "../Section";
import { Hero } from "../Hero";
import { Collection } from "../Collection";
import { Choice } from "../Choice";
import { Works } from "../Works";

export const Home = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Collection />
      </Section>
      <Section>
        <Choice />
      </Section>
      <Section>
        <Works />
      </Section>
    </>
  );
};
