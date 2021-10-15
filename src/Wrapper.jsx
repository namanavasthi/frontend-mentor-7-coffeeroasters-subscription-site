import React from "react";

export const Wrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center max-w-7xl pb-72 px-24 md:px-10 xl:px-0 w-full ${className}`}
    >
      {children}
    </div>
  );
};
