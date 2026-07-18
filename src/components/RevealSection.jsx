import { useState } from "react";

const RevealSection = ({ children, className = "", delay = 0 }) => {
  const [isVisible] = useState(true);

  return (
    <div
      className={`reveal-section ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealSection;