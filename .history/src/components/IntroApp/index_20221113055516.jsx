/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Styledaside,
  StyledWrapperdiv,
  ImgWrapper,
  DownloadIcons,
  StyledSpan,
  QRWrapperdiv,
  BtnDiv,
} from "./style";
import {
  useTabletMqContext,
  useLaptopMqContext,
} from "src/Context/MediaQueryContext";

export default function IntroApp() {
  const isTablet = useTabletMqContext();
  const isLaptop = useLaptopMqContext();
  return (
    <Styledaside>
      <StyledWrapperdiv>
        <Image
          src="/img/newtbigicon.svg"
          alt="newt icon"
          width={isTablet ? 80 : 48}
          height={isTablet ? 80 : 48}
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
      {isTablet && (
        <DownloadIcons>
          <Link href="https://apps.apple.com/app/id1585901351">
            <a>
              <Image src="/img/img27.png" alt="" width={150} height={48} />
            </a>
          </Link>
          <Link href="https://apps.apple.com/app/id1585901351">
            <a>
              <Image src="/img/img28.png" alt="" width={150} height={48} />
            </a>
          </Link>
        </DownloadIcons>
      )}
      {isLaptop && (
        <QRWrapperdiv>
          <Image src="/img/img29.png" alt="QRコード" width={99} height={99} />
        </QRWrapperdiv>
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
