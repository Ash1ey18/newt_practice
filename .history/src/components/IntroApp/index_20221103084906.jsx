import React from "react";
import Image from "next/image";

export default function IntroApp() {
  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="none"
          viewBox="0 0 80 80"
        ></svg>
      </div>
      <Image src="/img/img26.png" alt="" width={100} height={100} />
    </>
  );
}
