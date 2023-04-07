import React from "react";

const DeleteIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 32 32"
      {...props}
    >
      <g transform="scale(2)">
        <circle style={{ fill: "white", cx: "8", cy: "8", r: "7" }} />
        <rect
          style={{ ffill: "#fffff" }}
          width="2"
          height="10"
          x="-.98"
          y="-16.29"
          transform="rotate(135)"
        />
        <rect
          style={{ ffill: "#fffff" }}
          width="2"
          height="10"
          x="-12.29"
          y="-5.01"
          transform="rotate(-135)"
        />
      </g>
    </svg>
  );
};

export default DeleteIcon;
