import { client } from "libs/client";
import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";
import React from "react";
import ArticleList from "src/components/elements/ArticleList";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
import NavigationHeading from "src/components/NavigationHeading";
import { Area, GetsType } from "src/types/cms-types";
import {
  AreaHome_GetStaticProps_Props,
  AreaHome_Props,
} from "src/types/page-type";
const AreaHome: NextPageWithLayout<AreaHome_Props> = ({ areaBlogs, area }) => {
  const areaObj = area[0];
  if (areaBlogs.length === 0) {
    return <h1>404:該当ページはありませんでした。</h1>;
  }
  return (
    <>
      <NavigationHeading navObj={areaObj} />
      <ArticleList blog={areaBlogs} />
    </>
  );
};

AreaHome.getLayout = getAreaLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: GetsType<Area> = await client.get({
    endpoint: "categories",
    queries: { limit: 100 },
  });
  const paths = data.contents.map((content) => `/areas/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  AreaHome_GetStaticProps_Props
> = async (ctx) => {
  const id = typeof ctx.params?.id === "string" ? ctx.params.id : undefined;
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
export default AreaHome;
