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
  const isTablet = useTabletMqContext();
  const article = topArticle[0];
  const categoryList = article.category;
  const category = { ...categoryList[0] };
  const areaList = article.area;
  const area = { ...areaList[0] };
  const title = article.title;
  const description = article.description;
  const date = article.publishedAt
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
          <LoctionPoint isTop categry={category.name} area={area.name} />
          <ArticleTitle>
            <Link href="/">
              <a>{title}</a>
            </Link>
          </ArticleTitle>
          {isTablet && <Descriotionp>{description}</Descriotionp>}
          <ArticleInfo>
            <Image
              src="/img/img03.svg"
              alt="newt icon"
              width={32}
              height={32}
            />
            <ArticleDate isTop date={} />
            <Author>NEWT編集部</Author>
          </ArticleInfo>
        </Contents>
      </TopArticleWrapper>
    </RcmContainer>
  );
}
