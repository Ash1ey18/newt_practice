/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQueryContext } from "src/Hooks/useMediaQueryContext";

import {
  BtnDiv,
  DownloadIcons,
  ImgWrapper,
  IntroAppWrapper,
  QRWrapperdiv,
  Styledaside,
  StyledSpan,
  StyledWrapperdiv,
} from "./style";

const IntroApp = () => {
  const { isTablet, isLaptop } = useMediaQueryContext();
  return (
    <IntroAppWrapper>
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
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/img27.png"
                  alt="Google Playダウンロードボタン"
                  width={150}
                  height={48}
                />
              </a>
            </Link>
            <Link href="https://apps.apple.com/app/id1585901351">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/img28.png"
                  alt="Apple storeダウンロードボタン"
                  width={150}
                  height={48}
                />
              </a>
            </Link>
            {isLaptop && (
              <QRWrapperdiv>
                <Image
                  src="/img/img29.png"
                  alt="QRコード"
                  width={99}
                  height={99}
                />
              </QRWrapperdiv>
            )}
          </DownloadIcons>
        )}

        {isTablet || (
          <Link href="https://app.adjust.com/u1e28tl">
            <a target="_blank" rel="noopener noreferrer">
              <BtnDiv>アプリをダウンロードする</BtnDiv>
            </a>
          </Link>
        )}
      </Styledaside>
    </IntroAppWrapper>
  );
};

export default IntroApp;
