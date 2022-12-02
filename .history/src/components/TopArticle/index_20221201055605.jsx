/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  RcmContainer,
  TopArticleWrapper,
  ArticleTitle,
  signature,
  Author,
  ImgWrapper,
  Contents,
  Descriotionp,
} from "./style";
import LocationPoint from "src/components/elements/LocationPoint";
import ArticleDate from "src/components/elements/ArticleDate";
import { useTabletMqContext } from "src/Context/MediaQueryContext";

export default function TopArticle({ topArticle }) {
  const isTablet = useTabletMqContext();
  const blog = topArticle[0];
  const id = blog.id;
  const imgUrl = blog.main_img.url;
  const areaList = blog.areas;
  const title = blog.title;
  const description = blog.description;
  const publishedDate = blog.publishedAt;
  return (
    <RcmContainer>
      <TopArticleWrapper>
        <Link href={`/blog/${id}`}>
          <a>
            <ImgWrapper>
              <Image
                src={imgUrl}
                alt="ships"
                layout="fill"
                objectFit="contain"
                priority
              />
            </ImgWrapper>
          </a>
        </Link>
        <Contents>
          <LocationPoint isTop areaList={areaList} />
          <ArticleTitle>
            <Link href={`/blog/${id}`}>
              <a>{title}</a>
            </Link>
          </ArticleTitle>
          {isTablet && <Descriotionp>{description}</Descriotionp>}
          <Signature>
            <Image
              src="/img/img03.svg"
              alt="newt icon"
              width={32}
              height={32}
            />
            <ArticleDate isTop date={publishedDate} />
            <Author>NEWT編集部</Author>
          </Signature>
        </Contents>
      </TopArticleWrapper>
    </RcmContainer>
  );
}
