import React from "react";
import { Layout } from "src/components/Layout";

import TopArticle from "src/components/TopArticle";
import RecomArticles from "src/components/RecomArticles";
import LatestArticles from "src/components/LatestArticles";
import FeatureAreas from "src/components/FeatureAreas";
import RecomTags from "src/components/RecomTags";

export default function Home() {
  return (
    <Layout>
      <TopArticle />
      <RecomArticles />
      <LatestArticles />
      <FeatureAreas />
      <RecomTags />
    </Layout>
  );
}
