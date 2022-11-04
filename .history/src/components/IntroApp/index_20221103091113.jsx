import React from "react";
import Image from "next/image";

export default function IntroApp() {
  return (
    <>
      <div style={{width:18px;}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="none"
          viewBox="0 0 80 80"
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M24.787 0H55.22c8.62 0 11.74.9 14.893 2.58 3.154 1.687 5.62 4.16 7.307 7.307C79.107 13.041 80 16.161 80 24.782v30.436c0 8.62-.9 11.74-2.58 14.894-1.687 3.154-4.16 5.621-7.307 7.308C66.96 79.107 63.84 80 55.22 80H24.787c-8.62 0-11.74-.9-14.894-2.58-3.153-1.687-5.62-4.16-7.306-7.308C.9 66.966 0 63.84 0 55.218v-30.43c0-8.62.9-11.74 2.58-14.894A17.58 17.58 0 019.893 2.58C13.04.9 16.167 0 24.787 0z"
            clipRule="evenodd"
          ></path>
          <g mask="url(#___SVG_ID__54__0___)">
            <path fill="#F5F5F5" d="M0 0H80V80H0z"></path>
            <g clipPath="url(#___SVG_ID__54__1___)">
              <path fill="#00CD68" d="M-0.156 0H80V80.156H-0.156z"></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M55.238 23.202a48.83 48.83 0 002.7-1.895 11.512 11.512 0 0111.28-1.33 1.673 1.673 0 01.927 2.228 19.07 19.07 0 01-7.328 8.587 51.4 51.4 0 01-6.047 3.215 19.153 19.153 0 00-5.705 4.163 18.879 18.879 0 01-22.82 4.093.635.635 0 01.262-1.2 18.447 18.447 0 008.598-2.66.1.1 0 00.012-.181.101.101 0 00-.073-.011c-4.138-.001-8.261-.509-12.276-1.512a.595.595 0 00-.373 0 18.848 18.848 0 01-14.232-.091.634.634 0 01.211-1.22 18.606 18.606 0 006.955-1.753.212.212 0 000-.363 19.558 19.558 0 01-3.366-3.266.635.635 0 01.725-1.008c.585.232 1.19.444 1.815.645a.201.201 0 00.241-.08 30.722 30.722 0 0122.72-13.255 18.807 18.807 0 0115.502 6.894.202.202 0 00.272 0zm9.158-.515c.18.11.388.163.599.153h.04a1.058 1.058 0 00.288-2.046 1.059 1.059 0 00-.927 1.893zM22.278 63.813h1.462a.696.696 0 00.695-.695V51.526a.685.685 0 00-.695-.686h-2.077a.676.676 0 00-.685.686v6.47l-6.612-6.874a1.058 1.058 0 00-.746-.312h-1.472a.685.685 0 00-.685.685v11.592a.695.695 0 00.685.695h2.077a.697.697 0 00.695-.695v-6.471l6.612 6.843a1.008 1.008 0 00.746.353zm5.03 0h9.162a.695.695 0 00.695-.695v-1.683a.695.695 0 00-.695-.696h-6.461v-1.925h4.838a.685.685 0 00.685-.696v-1.683a.685.685 0 00-.685-.695h-4.838v-1.835h6.28a.687.687 0 00.685-.695v-1.684a.674.674 0 00-.686-.685h-8.98a.756.756 0 00-.756.756v11.45a.766.766 0 00.756.766zm36.064 0h-2.077a.696.696 0 01-.645-.695v-9.213h-3.77a.696.696 0 01-.685-.695v-1.684a.685.685 0 01.685-.685h10.967a.686.686 0 01.695.685v1.684a.696.696 0 01-.695.695h-3.78v9.213a.696.696 0 01-.695.695zm-14.464 0h2.016a.837.837 0 00.806-.645l2.64-11.571a.626.626 0 00-.614-.756H51.74a.837.837 0 00-.816.655l-1.27 6.048-1.432-6.048a.816.816 0 00-.806-.635h-1.623a.827.827 0 00-.806.635l-1.421 6.048-1.28-6.048a.816.816 0 00-.807-.655h-2.066a.615.615 0 00-.605.756l2.661 11.622a.827.827 0 00.807.645h2.015a.837.837 0 00.817-.635l1.492-6.23 1.502 6.23a.827.827 0 00.806.584z"
                clipRule="evenodd"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <Image src="/img/img26.png" alt="" width={100} height={100} />
    </>
  );
}