/* eslint-disable jsx-a11y/anchor-is-valid */
import { client } from "libs/client";
import { GetStaticProps, NextPageWithLayout } from "next";
import React from "react";
import FeatureAreas from "src/components/FeatureAreas";
import LatestArticles from "src/components/LatestArticles";
import RecomArticles from "src/components/Layouts/RecomArticles";
import RecomTags from "src/components/RecomTags";
import TopArticle from "src/components/TopArticle";
import { Area, Blog, Tag } from "src/types/cms-types";

const Home: NextPageWithLayout<{ blogs: Blog[] }> = ({ blogs, tags }) => {
  const topArticle = blogs.filter((_blog) => _blog.topArticle);
  const recomBlog = blogs.filter((_blog) => _blog.recommend);
  const latestBlog = blogs.filter((_blog, i) => i < 6);
  return (
    <>
      <TopArticle topArticle={topArticle} />
      <RecomArticles recomBlogs={recomBlog} />
      <LatestArticles latestBlog={latestBlog} />
      <FeatureAreas />
      <RecomTags tags={tags} />
    </>
  );
};

export default Home;

type Props = {
  blogs: Blog[];
  recomBlog: Blog[];
  tags: Tag[];
} & {
  [key: string]: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = await client.get({ endpoint: "blog" });
  const tags = await client.get({ endpoint: "tags" });

  const recomBlog = await client.get({
    endpoint: "blog",
    queries: {
      filters: "recommend[equals]true",
    },
  });
  return {
    props: {
      blogs: blogs.contents,

      recomBlog: recomBlog.contents,
      tags: tags.contents,
    },
  };
};
