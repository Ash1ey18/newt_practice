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

export default function RecomArticles({ blog }) {
  const isTablet = useTabletMqContext();
  return (
    <SectionWraper type={"recomArti"}>
      <h2>おすすめの記事</h2>
      <ArticlesWraper>
        {blog.map((_blog) => {
          const id = _blog.id;
          const category = _blog.category;
          const categoryName = { ...category[0] };
          const area = _blog.area;
          const areaName = { ...area[0] };
          const publishedAt = _blog.publishedAt;
          if (_blog.recommend) {
            return (
              <ArticleWraper key={id}>
                <ArticleImg src={_blog.main_img.url} alt="メインビジュアル" />
                <ArticleContentdiv>
                  <Title>
                    <Link href={`/blog/${id}`}>{_blog.title}</Link>
                  </Title>
                  {isTablet && (
                    <>
                      <LoctionPoint
                        categry={categoryName.name}
                        area={areaName.name}
                      />
                      <ArticleDate date={publishedAt} />
                    </>
                  )}
                </ArticleContentdiv>
              </ArticleWraper>
            );
          }
        })}
      </ArticlesWraper>
    </SectionWraper>
  );
}
