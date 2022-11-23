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
  const imgUrl = article.main_img.url;
  const category = article.category;
  const area = article.area;
  const title = article.title;
  const description = article.description;
  const publishedDate = article.publishedAt;
  return (
    <RcmContainer>
      <TopArticleWrapper>
        <Link href={`/${article.id}`}>
          <ImgWrapper>
            <Image
              src={imgUrl}
              alt="ships"
              layout="fill"
              objectFit="contain"
              priority
            />
          </ImgWrapper>
        </Link>
        <Contents>
          <LoctionPoint isTop category={category} areaList={area} />
          <ArticleTitle>
            <Link href={`/${article.id}`}>
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
            <ArticleDate isTop date={publishedDate} />
            <Author>NEWT編集部</Author>
          </ArticleInfo>
        </Contents>
      </TopArticleWrapper>
    </RcmContainer>
  );
}
