/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  RcmContainer,
  TopArticleWrapper,
  ArticleTitle,
  ArticleInfo,
  Author,
  ImgWrapper,
  Contents,
  Descriotionp,
} from "./style";
import LoctionPoint from "src/components/elements/LocationPoint";
import ArticleDate from "src/components/elements/ArticleDate";
import { useTabletMqContext } from "src/Context/MediaQueryContext";

export default function TopArticle({ topArticle }) {
  const article = topArticle[0];
  console.log(article);
  const isTablet = useTabletMqContext();
  const title = article.title;
  const category = article.category;
  // const categoryName = { ...category[0] };
  // const area = article.area;
  // const areaName = { ...area[0] };
  return (
    <RcmContainer>
      <TopArticleWrapper>
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
          {/* <LoctionPoint isTop categry={categoryName} area={areaName} /> */}
          <ArticleTitle>
            <Link href="/">
              <a>{title}</a>
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
            <ArticleDate isTop date="2022年9月27日" />
            <Author>NEWT編集部</Author>
          </ArticleInfo>
        </Contents>
      </TopArticleWrapper>
    </RcmContainer>
  );
}
