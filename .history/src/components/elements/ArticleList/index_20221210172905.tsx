import Link from "next/link";
import React from "react";
import LocationPoint from "src/components/elements/LocationPoint";
import { useTabletMqContext } from "src/Context/MediaQueryContext";

import ArticleDate from "../ArticleDate";
import ArticleImg from "../ArticleImg";
import { ArticlesWraper, ArticleWraper, ArtiDescription, Title } from "./style";
export default const ArticleList =({ blog }) => {
  const isTablet = useTabletMqContext();
  return (
    <ArticlesWraper>
      {blog.map((_blog) => {
        const id = _blog.id;
        const areaList = _blog.areas;
        const publishedAt = _blog.publishedAt;
        const description = _blog.description;
        return (
          <ArticleWraper key={id}>
            <ArticleImg
              src={_blog.main_img.url}
              alt="メインビジュアル"
              priority
              id={id}
            />
            <Title>
              <Link href={`/blog/${id}`}>
                <a>{_blog.title}</a>
              </Link>
            </Title>
            <LocationPoint areaList={areaList} />
            {isTablet && (
              <>
                <ArticleDate utcDate={publishedAt} />
                <ArtiDescription>{description}</ArtiDescription>
              </>
            )}
          </ArticleWraper>
        );
      })}
    </ArticlesWraper>
  );
}
