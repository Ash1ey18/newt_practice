import React from "react";
import { Location } from "./style";

export default function Location() {
  return (
    <>
      <Location>
        <svg
          src="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            fill="#00CD67"
            d="M7 1.167A4.08 4.08 0 002.917 5.25C2.917 8.313 7 12.833 7 12.833s4.083-4.52 4.083-7.583A4.08 4.08 0 007 1.167zm0 5.541a1.459 1.459 0 110-2.917 1.459 1.459 0 010 2.917z"
          ></path>
        </svg>

        <Link href="">
          <a>ハワイ・グアム</a>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            fill="#00CD67"
            d="M5.833 3.5l-.822.822L7.682 7 5.011 9.678l.822.822 3.5-3.5-3.5-3.5z"
          ></path>
        </svg>
        <Link href="">
          <a>グアム</a>
        </Link>
      </Location>
    </>
  );
}
