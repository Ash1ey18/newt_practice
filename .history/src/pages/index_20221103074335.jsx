import React from "react";
import Header from "src/components/Header";
import TopArticle from "src/components/TopArticle";
import RecomArticles from "src/components/RecomArticles";
import LatestArticles from "src/components/LatestArticles";
import FeatureAreas from "src/components/FeatureAreas";
import RecomTags from "src/components/RecomTags";

export default function Home() {
  return (
    <>
      <Header />
      <TopArticle />
      <RecomArticles />
      <LatestArticles />
      <FeatureAreas />
      <RecomTags />
    </>
  );
}