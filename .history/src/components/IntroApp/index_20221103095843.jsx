import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Styledaside,
  StyledWrapperdiv,
  Styledh2,
  ImgWrapper,
  BtnDiv,
} from "./style";

export default function IntroApp() {
  return (
    <Styledaside>
      <StyledWrapperdiv>
        <Image src="/img/newtAppIcon.svg" alt="" width={48} height={48} />
        <Styledh2>{`NEWT（ニュート\nスマートに海外旅行`}</Styledh2>
      </StyledWrapperdiv>
      <ImgWrapper>
        <Image src="/img/img26.png" alt="" layout="fill" objectFit="contain" />
      </ImgWrapper>
      <BtnDiv>
        <Link href="">
          <a></a>
        </Link>
      </BtnDiv>
    </Styledaside>
  );
}
