import React from "react";
import Layout from "src/components/Layout";

import { client } from "libs/client";
import BreadCrumb from "src/components/elements/BreadCrumb";

export default function CategoryId({ blogs, area }) {
  const areaObj = area[0];
  if (blogs.length === 0) {
    return <>該当ページはありませんでした。</>;
  }
  return (
    <Layout>
      <BreadCrumb areaObj={areaObj} />
      <ArticleList blog={blog}}/>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/areas/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const data1 = await client.get({
    endpoint: "blog",
    queries: {
      filters: `areas[contains]${id}`,
    },
  });
  const data2 = await client.get({
    endpoint: "categories",
    queries: { filters: `id[equals]${id}` },
  });
  return {
    props: {
      blogs: data1.contents,
      area: data2.contents,
    },
  };
};
