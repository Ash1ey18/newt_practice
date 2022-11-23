/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import { client } from "libs/client";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
import Layout from "src/components/Layout";
import ArticleImg from "src/components/elements/ArticleImg";
import ArticleDate from "src/components/elements/ArticleDate";
import LocationPoint from "src/components/elements/LocationPoint";
import {
  ArticlesWraper,
  ArticleWraper,
  Title,
  ArtiDescriotn,
} from "src/components/LatestArticles/style";
export default function AllBlog({ blog }) {
  const isTablet = useTabletMqContext();
  return (
    <Layout>
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
                  <ArtiDescriotn>{description}</ArtiDescriotn>
                </>
              )}
            </ArticleWraper>
          );
        })}
      </ArticlesWraper>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
  });
  return {
    props: {
      blog: data.contents,
    },
  };
};
