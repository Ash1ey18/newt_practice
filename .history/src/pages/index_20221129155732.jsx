/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import TopArticle from "src/components/TopArticle";
import RecomArticles from "src/components/Layouts/RecomArticles";
import LatestArticles from "src/components/LatestArticles";
import FeatureAreas from "src/components/FeatureAreas";
import RecomTags from "src/components/RecomTags";
import { getHomeLayout } from "src/components/Layouts/HomeLayout";

import { client } from "libs/client";

export default function Home({ blog, areas, recomBlog }) {
  const topArticle = blog.filter((_blog) => _blog.topArticle);
  const latestBlog = blog.filter((_blog, i) => i < 6);
  return (
    <>
      <TopArticle topArticle={topArticle} />
      <RecomArticles recomBlogs={recomBlog} />
      <LatestArticles latestBlog={latestBlog} />
      <FeatureAreas areas={areas} />
      <RecomTags />
    </>
  );
}
Home.getLayout = getHomeLayout;
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blog" });
  const areas = await client.get({ endpoint: "categories" });
  const recomBlog = await client.get({
    endpoint: "blog",
    queries: {
      filters: "recommend[equals]true",
    },
  });
  return {
    props: {
      blog: blog.contents,
      areas: areas.contents,
      recomBlog: recomBlog.contents,
    },
  };
};
