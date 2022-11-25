import React from "react";
import Link from "next/link";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
import ArticleImg from "../elements/ArticleImg";
import LocationPoint from "src/components/elements/LocationPoint";
import ArticleDate from "../elements/ArticleDate";
import {
  ArticlesWraper,
  ArticleWraper,
  Title,
  ArtiDescription,
} from "../RecomArticles/style";
export default function ArticleList({ blog }) {
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
                <ArticleDate date={publishedAt} />
                <ArtiDescription>{description}</ArtiDescription>
              </>
            )}
          </ArticleWraper>
        );
      })}
    </ArticlesWraper>
  );
}
