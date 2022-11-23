import React from "react";
import { client } from "libs/client";

import Layout from "src/components/Layout";
import ArticleImg from "src/components/elements/ArticleImg";

import {
  ArticlesWraper,
  ArticleWraper,
  Title,
  ArtiDescriotn,
} from "src/components/LatestArticles/style";
export default function AllBlog({ blog }) {
  console.log(blog);
  return (
    <Layout>
      <ArticlesWraper>
        {blog.map((_blog) => {
          const id = _blog.id;
          const categoryList = _blog.category;
          const areaList = _blog.area;
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
