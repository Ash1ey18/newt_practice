import React from "react";
import Link from "next/link";

import {
  ArticlesWraper,
  ArticleWraper,
  ArticleContentdiv,
  Title,
} from "./style";
import SectionWraper from "src/components/elements/SectionWrapper";
import ArticleImg from "src/components/elements/ArticleImg";
import LoctionPoint from "src/components/elements/LocationPoint";
import ArticleDate from "src/components/elements/ArticleDate";
import { useTabletMqContext } from "src/Context/MediaQueryContext";

export default function RecomArticles({ recomBlog }) {
  const isTablet = useTabletMqContext();
  return (
    <SectionWraper type={"recomArti"}>
      <h2>おすすめの記事</h2>
      <ArticlesWraper>
        {recomBlog.map((_blog) => {
          const id = _blog.id;
          const imgUrl = _blog.main_img.url;
          const areaList = _blog.area;
          const publishedAt = _blog.publishedAt;
          return (
            <ArticleWraper key={id}>
              <ArticleImg src={imgUrl} alt="メインビジュアル" id={id} />
              <ArticleContentdiv>
                <Title>
                  <Link href={`/blog/${id}`}>{_blog.title}</Link>
                </Title>
                {isTablet && (
                  <>
                    <LoctionPoint areaList={areaList} />
                    <ArticleDate date={publishedAt} />
                  </>
                )}
              </ArticleContentdiv>
            </ArticleWraper>
          );
        })}
      </ArticlesWraper>
    </SectionWraper>
  );
}
