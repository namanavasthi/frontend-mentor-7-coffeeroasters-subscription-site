import React from "react";

export const Section = ({ children, className = "" }) => {
  return <section className={`w-full mb-120 ${className}`}>{children}</section>;
};
