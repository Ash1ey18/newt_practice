/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  RcmContainer,
  TopArticleWraper,
  ArticleTitle,
  ArticleInfo,
  Author,
  ImgWrapper,
  Contents,
  Descriotionp,
} from "./style";
import LoctionPoint from "src/components/LocationPoint";
import ArticleDate from "src/components/ArticleDate";
import { useTabletMqContext } from "src/Context/MediaQueryContext";

export default function Reccomend() {
  const isTablet = useTabletMqContext();
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
          <LoctionPoint isTop categry="アジア" area="台湾" />
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
            <ArticleDate date="2022年9月27日" />
            <Author>NEWT編集部</Author>
          </ArticleInfo>
        </Contents>
      </TopArticleWraper>
    </RcmContainer>
  );
}
