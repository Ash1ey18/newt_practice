import React from "react";
import Header from "src/components/Header";
import TopArticle from "src/components/TopArticle";
import RecomArticles from "src/components/RecomArticles";
import LatestArticles from "src/components/LatestArticles";

export default function Home() {
  return (
    <>
      <Header />
      <TopArticle />
      <RecomArticles />
      <LatestArticles />
    </>
  );
}
