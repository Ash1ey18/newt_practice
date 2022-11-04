import React from "react";
import Image from "next/image";

import { ImgContainer } from "./style";

export default function Header() {
  return (
    <ImgContainer>
      <Image src="/img/newtlogo1.svg" alt="newt" width={140} height={27} />
    </ImgContainer>
  );
}
