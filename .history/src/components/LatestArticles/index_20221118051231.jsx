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

export default function LatesetArticles({ blog }) {
  const isTablet = useTabletMqContext();
  blog.map((_blog, i) => {
    console.log(_blog.title + i);
  });
  return (
    <SectionWraper where="latestArti">
      <h2>最新の記事</h2>
      <ArticlesWraper>
        {blog.map((_blog) => {
          const category = _blog.category;
          const categoryName = { ...category[0] };
          const area = _blog.area;
          const areaName = { ...area[0] };
          const publishedAt = _blog.publishedAt;
          const description = _blog.description;
          return (
            <ArticleWraper key={_blog.id}>
              <ArticleImg
                src={_blog.main_img.url}
                alt="メインビジュアル"
                priority
              />
              <Title>
                <Link href={`/blog/${_blog.id}`}>
                  <a>{_blog.title}</a>
                </Link>
              </Title>
              <LocationPoint categry={categoryName.name} area={areaName.name} />
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
