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

<img
  alt="トップ画像"
  sizes="(min-width:640px) 50vw"
  srcSet="/_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=3840&q=75 3840w"
  src="/_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=3840&q=75"
  decoding="async"
  data-nimg="fill"
  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
></img>;
