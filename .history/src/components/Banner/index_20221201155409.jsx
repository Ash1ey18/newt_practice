import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
import {
  BannerWrapper,
  ImageWrapper,
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
      <Heading>
        <Image
          src="/img/newtbigicon.svg"
          alt="newt icon"
          width={isTablet ? 100 : 45}
          height={isTablet ? 100 : 45}
        />
        <BannerTitle>{`NEWT（ニュート)\nスマートに海外旅行`}</BannerTitle>

        <AppBtnWrapper>
          <Link href="https://apps.apple.com/app/id1585901351">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/img27.png"
                alt="Google Playダウンロードボタン"
                width={92}
                height={29}
              />
            </a>
          </Link>
          <Link href="https://apps.apple.com/app/id1585901351">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/img28.png"
                alt="Apple storeダウンロードボタン"
                width={92}
                height={29}
              />
            </a>
          </Link>
        </AppBtnWrapper>
      </Heading>
    </BannerWrapper>
  );
}
