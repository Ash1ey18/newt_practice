import React from "react";

import { client } from "libs/client";
import BreadCrumb from "src/components/elements/BreadCrumb";
import ArticleList from "src/components/elements/ArticleList";
import ArticleHeading from "src/components/elements/ArticleHeading";
import { createGetAreaLayout } from "src/components/Layouts/AreaLayout";
export default function AreaHome({ blogs, area }) {
  const areaObj = area[0];
  const recomBlog = blog.filter((_blog) => _blog.recommend);

  if (blogs.length === 0) {
    return <>該当ページはありませんでした。</>;
  }
  return (
    <>
      <BreadCrumb areaObj={areaObj} />
      <ArticleHeading areaObj={areaObj} />
      <ArticleList blog={blogs} />
    </>
  );
}

AreaHome.getLayout = createGetAreaLayout();

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
      blogs: areaArticleData.contents,
      area: areaNameData.contents,
    },
  };
};