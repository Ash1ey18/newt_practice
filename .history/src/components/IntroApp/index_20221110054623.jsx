/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Styledaside,
  StyledWrapperdiv,
  ImgWrapper,
  StyledImage,
  BtnDiv,
  StyledSpan,
} from "./style";
import { useMqContext } from "src/Context/MediaQueryContext";

export default function IntroApp() {
  const isTablet = useMqContext();
  return (
    <Styledaside>
      <StyledWrapperdiv>
        <StyledImage
          src="/img/newtAppIcon.svg"
          alt="newt icon"
          width={48}
          height={48}
        />
        <StyledSpan>{`NEWT（ニュート)\nスマートに海外旅行`}</StyledSpan>
      </StyledWrapperdiv>
      {isTablet ? (
        <Image
          src="/img/img26.png"
          alt="スマートフォン"
          width={212}
          height={269}
        />
      ) : (
        <ImgWrapper>
          <Image
            src="/img/img30.png"
            alt="スマートフォン"
            layout="fill"
            objectFit="contain"
          />
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
