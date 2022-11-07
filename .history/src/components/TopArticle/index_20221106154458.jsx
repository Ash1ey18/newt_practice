/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import {
  RcmContainer,
  TopArticleWraper,
  ArticleTitle,
  ArticleInfo,
  PubTime,
  Author,
  ImgWrapper,
  Contents,
  Descriotionp,
} from "./style";
import LoctionPoint from "src/components/LocationPoint";

export default function Reccomend() {
  const [hydrated, setHydrated] = useState(false);
  const isTablet = useMediaQuery(
    { query: "(min-width: 640px)" },
    hydrated ? undefined : { deviceWidth: 1600 }
  );

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <RcmContainer>
      <TopArticleWraper>
        <ImgWrapper>
          <Image
            src="/img/img02.jpg"
            alt="ships"
            layout="fill"
            objectFit="contain"
            priority
          />
        </ImgWrapper>
        <Contents>
          <LoctionPoint isTop={}>
            <Image
              src="/img/mappoint.svg"
              alt="⏉"
              width={isTablet ? 16 : 14}
              height={isTablet ? 16 : 14}
            />
            <Link href="">
              <a>アジア</a>
            </Link>
            <Image
              src="/img/pointer.svg"
              alt=">"
              width={isTablet ? 16 : 14}
              height={isTablet ? 16 : 14}
            />
            <Link href="">
              <a>台湾</a>
            </Link>
          </LoctionPoint>
          <ArticleTitle>
            <Link href="#">
              <a>台湾・高雄の観光スポットは？人気から穴場まで最新ランキング</a>
            </Link>
          </ArticleTitle>
          {isTablet && (
            <Descriotionp>
              高雄市は台湾第三の都市として知られる、南部の港町です。台北からは台湾高速鉄道で結ばれていて、左営駅までは最短90分でアクセスすることができます。開発が進んでいるものの、昔ながらの台湾らしいのんびりした雰囲気を楽しめるのが魅力！
            </Descriotionp>
          )}
          <ArticleInfo>
            <Image
              src="/img/img03.svg"
              alt="newt icon"
              width={32}
              height={32}
            />
            <PubTime dateTime="">2022年9月27日</PubTime>
            <Author>NEWT編集部</Author>
          </ArticleInfo>
        </Contents>
      </TopArticleWraper>
    </RcmContainer>
  );
}
