import React from "react";

const SprofileIcon = (props) => {
  return (
    <svg {...props} viewBox="0 0 40 40" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
        fill={props.fill ?? "#FF7F00"}
      />
      <g clipPath="url(#clip0_5349_1243)">
        <g clipPath="url(#clip1_5349_1243)">
          <path
            d="M12 30C12 27.8783 12.8429 25.8434 14.3431 24.3431C15.8434 22.8429 17.8783 22 20 22C22.1217 22 24.1566 22.8429 25.6569 24.3431C27.1571 25.8434 28 27.8783 28 30H26C26 28.4087 25.3679 26.8826 24.2426 25.7574C23.1174 24.6321 21.5913 24 20 24C18.4087 24 16.8826 24.6321 15.7574 25.7574C14.6321 26.8826 14 28.4087 14 30H12ZM20 21C16.685 21 14 18.315 14 15C14 11.685 16.685 9 20 9C23.315 9 26 11.685 26 15C26 18.315 23.315 21 20 21ZM20 19C22.21 19 24 17.21 24 15C24 12.79 22.21 11 20 11C17.79 11 16 12.79 16 15C16 17.21 17.79 19 20 19Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_5349_1243">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
        <clipPath id="clip1_5349_1243">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SprofileIcon;
