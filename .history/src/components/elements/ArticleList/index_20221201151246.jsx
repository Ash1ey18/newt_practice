import React from "react";
import Link from "next/link";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
import ArticleImg from "../ArticleImg";
import LocationPoint from "src/components/elements/LocationPoint";
import ArticleDate from "../ArticleDate";
import { ArticlesWraper, ArticleWraper, Title, ArtiDescription } from "./style";
export default function ArticleList({ blog }) {
  const isTablet = useTabletMqContext();
  //修正
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
