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
  return (
    <Layout>
      <TopArticle />
      <RecomArticles blog={blog} />
      <LatestArticles blog={blog} />
      <FeatureAreas areas={areas} />
      <RecomTags />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data1 = await client.get({ endpoint: "blog"  queries: {
    filters: `category[contains]${id}`,
  }, });
  const data2 = await client.get({ endpoint: "categories" });
  return {
    props: {
      blog: data1.contents,
      areas: data2.contents,
    },
  };
};
