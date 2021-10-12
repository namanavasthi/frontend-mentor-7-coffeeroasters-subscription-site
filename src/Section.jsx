import React from "react";

export const Section = ({ children, className = "" }) => {
  return <section className={`mb-120 ${className}`}>{children}</section>;
};
