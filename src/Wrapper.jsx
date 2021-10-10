import React from "react";

export const Wrapper = ({ children, className = "" }) => {
  return <div className={`flex flex-col justify-center items-center max-w-7xl w-full ${className}`}>{children}</div>;
};
