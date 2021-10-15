import React from "react";

import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import Bean from "./assets/shared/desktop/footer-bean.svg";

import { HashRouter as Router, Link } from "react-router-dom";
import { NAV } from "./DATA";

export const Footer = () => {
  return (
    <footer className="bg-primary-300 w-full flex flex-col items-center py-54">
      <div className="flex flex-row px-56">
        <img className="w-22 h-22" src={Bean} alt="bean" />
        <h2 className="font-fraunces text-white text-22 leading-22 pl-8">coffeeroasters</h2>
      </div>
      <Router>
        <ul className="pt-67 text-neutral-300 uppercase font-bold text-center flex flex-col items-center">
          {NAV.map((item, i) => (
            <li className="mb-12 p-12" key={i}>
              <Link className="text-12 leading-15 tracking-0.92" to={item.link}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </Router>
      <ul className="flex flex-row items-center justify-around pt-48">
        <li className="text-white text-24 px-24">
          <a href="https://www.facebook.com">
            <FaFacebookSquare />
          </a>
        </li>
        <li className="text-white text-24 px-24">
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li className="text-white text-24 px-24">
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </footer>
  );
};
