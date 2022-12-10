import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTabletMqContext } from "src/Context/MediaQueryContext";

import {
  AppBtnWrapper,
  BannerRight,
  BannerTitle,
  BannerWrapper,
  Heading,
  ImageWrapper,
} from "./style";
const Banner() {
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
                width={isTablet ? 132 : 92}
                height={isTablet ? 42 : 29}
              />
            </a>
          </Link>
          <Link href="https://apps.apple.com/app/id1585901351">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/img28.png"
                alt="Apple storeダウンロードボタン"
                width={isTablet ? 132 : 92}
                height={isTablet ? 42 : 29}
              />
            </a>
          </Link>
        </AppBtnWrapper>
      </BannerRight>
    </BannerWrapper>
  );
}
export default Banner;