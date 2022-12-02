import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
import {
  BannerWrapper,
  ImageWrapper,
  BannerRight,
  Heading,
  BannerTitle,
  AppBtnWrapper,
} from "./style";
export default function Banner() {
  const isTablet = useTabletMqContext();
  return (
    // <Link href="https://apps.apple.com/app/id1585901351">
    //   <a target="_blank" rel="noopener noreferrer">
    //   </a>
    // </Link>
    <BannerWrapper>
      <ImageWrapper>
        <Image
          src="/img/img26.png"
          alt="スマートフォン"
          layout="fill"
          objectFit="contain"
        />
      </ImageWrapper>
      <BannerRight>
        <Heading>
          <Image
            src="/img/newtbigicon.svg"
            alt="newt icon"
            width={isTablet ? 68 : 45}
            height={isTablet ? 68 : 45}
          />
          <BannerTitle>{`NEWT（ニュート)\nスマートに海外旅行`}</BannerTitle>
        </Heading>
        <AppBtnWrapper>
          <Link href="https://apps.apple.com/app/id1585901351">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/img27.png"
                alt="Google Playダウンロードボタン"
                width={isTablet ? 92 : 132}
                height={isTablet ? 29 : 42}
              />
            </a>
          </Link>
          <Link href="https://apps.apple.com/app/id1585901351">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/img28.png"
                alt="Apple storeダウンロードボタン"
                width={isTablet ? 92 : 132}
                height={isTablet ? 29 : 42}
              />
            </a>
          </Link>
        </AppBtnWrapper>
      </BannerRight>
    </BannerWrapper>
  );
}
