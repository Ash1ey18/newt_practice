import React from "react";
import Layout from "src/components/Layout";

import { client } from "libs/client";
// import BreadCrumb from "src/components/elements/BreadCrumb";

export default function CategoryId({ blogs, area }) {
  console.log(area);
  if (blogs.length === 0) {
    return <>該当ページはありませんでした。</>;
  }
  return (
    <Layout>
      <BreadCrumb areaObj={areaObj} />
      <ul>
        {blogs.map((_blog) => {
          return <li key={_blog.id}>{_blog.title}</li>;
        })}
      </ul>
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
