import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import { HeadContainer, ImgContainer } from "./style.js";

export default function Header() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <HeadContainer>
      <ImgContainer>
        <Image
          src="/img/newtlogo1.svg"
          alt="newt"
          layout="fill"
          objectFit="contain"
          priority
        />
      </ImgContainer>
    </HeadContainer>
  );
}
