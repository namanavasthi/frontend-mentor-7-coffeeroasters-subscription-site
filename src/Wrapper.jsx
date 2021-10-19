import React from "react";

export const Wrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center max-w-327 md:max-w-689 lg:max-w-7xl pb-72 w-full ${className}`}
    >
      {children}
    </div>
  );
};
