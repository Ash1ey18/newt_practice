/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import TopArticle from "src/components/TopArticle";
import LatestArticles from "src/components/LatestArticles";
import FeatureAreas from "src/components/FeatureAreas";
import RecomTags from "src/components/RecomTags";
import { getHomeLayout } from "src/components/Layouts/HomeLayout";

import { client } from "libs/client";

export default function Home({ blog, areas }) {
  const topArticle = blog.filter((_blog) => _blog.topArticle);
  const latestBlog = blog.filter((_blog, i) => i < 6);
  return (
    <>
      <TopArticle topArticle={topArticle} />
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
  return {
    props: {
      blog: blog.contents,
      areas: areas.contents,
    },
  };
};
