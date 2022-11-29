import React from "react";
import { client } from "libs/client";
import BreadCrumb from "src/components/elements/BreadCrumb";
import ArticleList from "src/components/elements/ArticleList";
import ArticleHeading from "src/components/elements/ArticleHeading";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
export default function AreaHome({ areaBlogs, area, recomBlogs }) {
  const areaObj = area[0];
  if (areaBlogs.length === 0) {
    return <h1>該当ページはありませんでした。</h1>;
  }
  return (
    <>
      <BreadCrumb areaObj={areaObj} />
      <ArticleHeading areaObj={areaObj} />
      <ArticleList blog={areaBlogs} />
    </>
  );
}
console.log(AreaHome.getLayout);
// AreaHome.getLayout = createGetLayout();
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
  const recomBlogData = await client.get({
    endpoint: "blog",
    queries: {
      filters: "recommend[equals]true",
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
      recomBlogs: recomBlogData.contents,
    },
  };
};
