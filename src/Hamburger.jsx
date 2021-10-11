import React, { useState, useRef, useEffect } from "react";

import { createPortal } from "react-dom";

import { MdClose, MdMenu } from "react-icons/md";
import { NavList } from "./NavList";

const menuRoot = document.getElementById("menu");

const Modal = ({ show, children, className }) => {
  const elementRef = useRef(null);

  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    menuRoot.appendChild(elementRef.current);

    return () => menuRoot.removeChild(elementRef.current);
  }, []);

  useEffect(() => {
    if (show) {
      menuRoot.classList.remove("hidden");
      menuRoot.classList.add("absolute");
      menuRoot.classList.add("left-0");
      menuRoot.classList.add("top-24");
    } else {
      menuRoot.classList.add("hidden");
      menuRoot.classList.remove("absolute");
      menuRoot.classList.remove("left-0");
      menuRoot.classList.remove("top-24");
    }
  }, [show]);

  return createPortal(
    <div>
      {show ? (
        <div
          style={{ background: "linear-gradient(#FEFCF7, 85%, rgba(254,252,247,0.5))" }}
          className={`w-full flex flex-col items-center h-screen z-20 ${className}`}
        >
          {children}
        </div>
      ) : null}
    </div>,
    elementRef.current
  );
};

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <MdClose /> : <MdMenu />}</button>
      <Modal className="px-6" show={isOpen}>
        <hr className="w-full border-neutral-200 border-opacity-50 pb-5" />
        <NavList />
      </Modal>
    </>
  );
};
