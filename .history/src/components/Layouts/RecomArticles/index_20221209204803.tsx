import Link from "next/link";
import React, { FC } from "react";
import ArticleDate from "src/components/elements/ArticleDate";
import ArticleImg from "src/components/elements/ArticleImg";
import LoctionPoint from "src/components/elements/LocationPoint";
import SectionWraper from "src/components/elements/SectionWrapper";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
import { DateType } from "src/types/cms-types";

import {
  ArticleContentdiv,
  ArticlesWraper,
  ArticleWraper,
  Title,
} from "./style";

const RecomArticles: FC<DateType[]> = ({ recomBlogs }) => {
  const isTablet = useTabletMqContext();
  return (
    <SectionWraper type={"recomArti"}>
      <h2>おすすめの記事</h2>
      <ArticlesWraper>
        {recomBlogs.map((_blog) => {
          return (
            <ArticleWraper key={_blog.id}>
              <ArticleImg
                src={_blog.main_img.url}
                alt="メインビジュアル"
                id={_blog.id}
              />
              <ArticleContentdiv>
                <Title>
                  <Link href={`/blog/${_blog.id}`}>{_blog.title}</Link>
                </Title>
                {isTablet && (
                  <>
                    <LoctionPoint areaList={_blog.areas} />
                    <ArticleDate utcDate={_blog.publishedAt} />
                  </>
                )}
              </ArticleContentdiv>
            </ArticleWraper>
          );
        })}
      </ArticlesWraper>
    </SectionWraper>
  );
};
export default RecomArticles;
