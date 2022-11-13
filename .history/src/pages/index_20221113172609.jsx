import React from "react";
import Layout from "src/components/Layout";

import TopArticle from "src/components/TopArticle";
import RecomArticles from "src/components/RecomArticles";
import LatestArticles from "src/components/LatestArticles";
import FeatureAreas from "src/components/FeatureAreas";
import RecomTags from "src/components/RecomTags";

import { client } from "libs/client";

export default function Home({ blog }) {
  return (
    <Layout>
      <ul>
        {blog.map((content) => {
          return <li key={content.id}>{content.title}</li>;
        })}
      </ul>
      <TopArticle />
      <RecomArticles />
      <LatestArticles />
      <FeatureAreas />
      <RecomTags />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data.contents);
  return {
    props: {
      blog: data.contents,
    },
  };
};
