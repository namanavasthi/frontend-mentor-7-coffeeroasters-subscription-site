import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

import { NAV } from "./DATA";

export const NavList = () => {
  return (
    <Router>
      <ul className="flex flex-col items-center w-full md:w-auto md:flex-row capitalize md:uppercase">
        {NAV.map((item, i) => (
          <li className="my-5 md:my-0" key={i}>
            <Link className="p-5" to={item.link}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </Router>
  );
};
