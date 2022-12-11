/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import LocationPoint from "src/components/elements/LocationPoint";
import Signature from "src/components/elements/Signature";
import { useTabletMqContext } from "src/Hooks/MediaQueryContext";
import { TopArticle_Props } from "src/types/article-type";

import {
  ArticleTitle,
  Contents,
  Descriotionp,
  ImgWrapper,
  RcmContainer,
  TopArticleWrapper,
} from "./style";

const TopArticle: FC<TopArticle_Props> = ({ topArticles }) => {
  const isTablet = useTabletMqContext();
  const blog = topArticles[0];
  const id = blog.id;
  const imgUrl = blog.main_img.url;
  const areaList = blog.areas;
  const title = blog.title;
  const description = blog.description;
  const publishedUtcDate = blog.publishedAt;
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
          <Signature publishedUtcDate={publishedUtcDate} />
        </Contents>
      </TopArticleWrapper>
    </RcmContainer>
  );
};

export default TopArticle;
