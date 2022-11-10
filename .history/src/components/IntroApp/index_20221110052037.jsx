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
import { useMqContext } from "src/Context/MediaQueryContext";

export default function IntroApp() {
  const isTablet = useMqContext();
  return (
    <Styledaside>
      <StyledWrapperdiv>
        <Image src="/img/newtAppIcon.svg" alt="" width={48} height={48} />
        <StyledSpan>{`NEWT（ニュート)\nスマートに海外旅行`}</StyledSpan>
      </StyledWrapperdiv>
      {isTablet ? (
        <ImgWrapper>
          <StyledImg src="/img/img30.png" alt="スマートフォン" />
        </ImgWrapper>
      ) : (
        <ImgWrapper>
          <StyledImg src="/img/img30.png" alt="スマートフォン" />
        </ImgWrapper>
      )}

      {isTablet || (
        <BtnDiv>
          <Link href="https://app.adjust.com/u1e28tl">
            <a>アプリをダウンロードする</a>
          </Link>
        </BtnDiv>
      )}
    </Styledaside>
  );
}
