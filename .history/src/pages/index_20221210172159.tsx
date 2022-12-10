/* eslint-disable jsx-a11y/anchor-is-valid */
import { client } from "libs/client";
import { GetStaticProps, NextPageWithLayout } from "next";
import React from "react";
import FeatureAreas from "src/components/FeatureAreas";
import LatestArticles from "src/components/LatestArticles";
import RecomArticles from "src/components/Layouts/RecomArticles";
import RecomTags from "src/components/RecomTags";
import TopArticle from "src/components/TopArticle";
import { Blog, GetsType, Tag } from "src/types/cms-types";
import { Home_Props } from "src/types/page-type";

const Home: NextPageWithLayout<Home_Props> = ({
  topArticle,
  latestBlogs,
  recomBlogs,
  tags,
}) => {
  return (
    <>
      <TopArticle topArticle={topArticle} />
      <RecomArticles recomBlogs={recomBlogs} />
      <LatestArticles latestBlogs={latestBlogs} />
      <FeatureAreas />
      <RecomTags tags={tags} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Home_Props> = async () => {
  const blogs: GetsType<Blog> = await client.get({ endpoint: "blog" });
  const tags: GetsType<Tag> = await client.get({ endpoint: "tags" });

  const recomBlogs: GetsType<Blog> = await client.get({
    endpoint: "blog",
    queries: {
      filters: "recommend[equals]true",
    },
  });
  const topArticle = blogs.contents.filter((_blog) => _blog.topArticle);
  const latestBlogs = blogs.contents.filter((_blog, i) => i < 6);
  return {
    props: {
      topArticle,
      recomBlogs: recomBlogs.contents,
      latestBlogs,
      tags: tags.contents,
    },
  };
};
