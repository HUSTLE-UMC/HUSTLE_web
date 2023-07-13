import React from "react";

interface Props {
  transform?: string;
}

export const Arrow = ({ transform }: Props): JSX.Element => {
  return (
    <>
      {
        <svg
          width="15"
          height="18"
          viewBox="0 0 25 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform={transform}
        >
          <path
            d="M6.75977 10.3486L12.7598 17.0728L18.7598 10.3486"
            stroke="#757575"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
    </>
  );
};
