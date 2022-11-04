import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import { ImgContainer } from "./style.js";

export default function Header() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <ImgContainer>
      <Image
        src="/img/newtlogo1.svg"
        alt="newt"
        width={140}
        height={27}
        priority
      />
    </ImgContainer>
  );
}
