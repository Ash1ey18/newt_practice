/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

import {
  ArticlesWraper,
  ArticleWraper,
  Title,
  ArtiDescriotn,
  BtnDiv,
} from "./style";

import SectionWraper from "src/components/elements/SectionWrapper";
import ArticleImg from "src/components/elements/ArticleImg";
import LocationPoint from "src/components/elements/LocationPoint";
import ArticleDate from "src/components/elements/ArticleDate";
import { useTabletMqContext } from "src/Context/MediaQueryContext";

export default function LatesetArticles({ latestBlog }) {
  const isTablet = useTabletMqContext();

  return (
    <SectionWraper where="latestArti">
      <h2>最新の記事</h2>
      <ArticlesWraper>
        {latestBlog.map((_blog) => {
          const categoryList = _blog.category;
          const areaList = _blog.area;
          const publishedAt = _blog.publishedAt;
          const description = _blog.description;
          return (
            <ArticleWraper key={_blog.id}>
              <Link href={`/${id}`}>
                <a>
                  <ArticleImg
                    src={_blog.main_img.url}
                    alt="メインビジュアル"
                    priority
                  />
                </a>
              </Link>
              <Title>
                <Link href={`/blog/${_blog.id}`}>
                  <a>{_blog.title}</a>
                </Link>
              </Title>
              <LocationPoint categoryList={categoryList} areaList={areaList} />
              {isTablet && (
                <>
                  <ArticleDate date={publishedAt} />
                  <ArtiDescriotn>{description}</ArtiDescriotn>
                </>
              )}
            </ArticleWraper>
          );
        })}
      </ArticlesWraper>
      <BtnDiv>
        <p>
          <Link href="">
            <a>もっとみる</a>
          </Link>
        </p>
      </BtnDiv>
    </SectionWraper>
  );
}
