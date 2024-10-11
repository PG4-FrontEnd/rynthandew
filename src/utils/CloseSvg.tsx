import React from 'react';


interface svgProp {
  width?: number;
  height?: number;
}

export const CloseSVG = ({ width = 16, height = 16 }: svgProp) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 19.1667C15.0627 19.1667 19.1667 15.0626 19.1667 10C19.1667 4.9374 15.0627 0.833344 10 0.833344C4.93743 0.833344 0.833374 4.9374 0.833374 10C0.833374 15.0626 4.93743 19.1667 10 19.1667Z"
        fill="#ACB4BB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70334 9.99958L4.76819 13.9347L6.06455 15.2311L9.9997 11.2959L13.9349 15.2311L15.2312 13.9347L11.2961 9.99958L15.2312 6.06443L13.9349 4.76807L9.9997 8.70322L6.06455 4.76807L4.76819 6.06443L8.70334 9.99958Z"
        fill="white"
      />
    </svg>
  );
};
