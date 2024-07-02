import React from "react";

const RotationArrow = (svgIconStyles: string | undefined) => {
  return (
    <div style={{ width: "24px", height: "24px" }}>
      <svg
        width="11"
        height="6"
        viewBox="0 0 11 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgIconStyles}
      >
        <path d="M5.5 5.5L0.5 0.5H10.5L5.5 5.5Z" fill="#1C1B1F" />
      </svg>
    </div>
  );
};

export default RotationArrow;
