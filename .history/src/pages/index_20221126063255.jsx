/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Layout from "src/components/Layout";

import TopArticle from "src/components/TopArticle";
import RecomArticles from "src/components/RecomArticles";
import LatestArticles from "src/components/LatestArticles";
import FeatureAreas from "src/components/FeatureAreas";
import RecomTags from "src/components/RecomTags";

import { client } from "libs/client";

export default function Home({ blog, areas }) {
  const topArticle = blog.filter((_blog) => _blog.topArticle);
  const recomBlog = blog.filter((_blog) => _blog.recommend);
  const latestBlog = blog.filter((_blog, i) => i < 6);
  return (
    <>
      <TopArticle topArticle={topArticle} />
      <RecomArticles recomBlog={recomBlog} />
      <LatestArticles latestBlog={latestBlog} />
      <FeatureAreas areas={areas} />
      <RecomTags />
    </>
  );
}

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
