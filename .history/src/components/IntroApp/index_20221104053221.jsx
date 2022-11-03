/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Styledaside,
  StyledWrapperdiv,
  ImgWrapper,
  BtnDiv,
  StyledSpan,
  StyledImg,
} from "./style";

export default function IntroApp() {
  return (
    <Styledaside>
      <StyledWrapperdiv>
        <Image src="/img/newtAppIcon.svg" alt="" width={48} height={48} />
        <StyledSpan>{`NEWT（ニュート)\nスマートに海外旅行`}</StyledSpan>
      </StyledWrapperdiv>
      <ImgWrapper>
        <StyledImg src="/img/img26.png" alt="スマートフォン" />
      </ImgWrapper>
      <BtnDiv>
        <Link href="https://app.adjust.com/u1e28tl">
          <a>アプリをダウンロードする</a>
        </Link>
      </BtnDiv>
    </Styledaside>
  );
}
