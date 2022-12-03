import { client } from "libs/client";
import React from "react";
import ArticleList from "src/components/elements/ArticleList";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
import NavigationHeading from "src/components/NavigationHeading";
export default function AreaHome({ areaBlogs, area }) {
  const areaObj = area[0];
  if (areaBlogs.length === 0) {
    return <h1>該当ページはありませんでした。</h1>;
  }
  return (
    <>
      <NavigationHeading navObj={areaObj} />
      <ArticleList blog={areaBlogs} />
    </>
  );
}

AreaHome.getLayout = getAreaLayout;

export const getStaticPaths = async () => {
  const data = await client.get({
    endpoint: "categories",
    queries: { limit: 100 },
  });
  const paths = data.contents.map((content) => `/areas/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const areaArticleData = await client.get({
    endpoint: "blog",
    queries: {
      filters: `areas[contains]${id}`,
    },
  });

  const areaNameData = await client.get({
    endpoint: "categories",
    queries: { filters: `id[equals]${id}` },
  });
  return {
    props: {
      areaBlogs: areaArticleData.contents,
      area: areaNameData.contents,
    },
  };
};
