import React from "react";

export const Section = ({ children, className = "" }) => {
  return <section className={`mb-44 ${className}`}>{children}</section>;
};
