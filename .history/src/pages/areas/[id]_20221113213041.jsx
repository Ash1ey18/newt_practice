import React from "react";
// import Layout from "src/components/Layout";

import { client } from "libs/client";
//areasでpagesを読み込みたい。
export default function CategoryId({category, blog }) {
  console.log(blog);
  return <div>{blog.title}</div>;
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/areas/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const data1 = await client.get({endpoint:"categories"})
  const data = await client.get({
    endpoint: "blog",
    queries: { filters: `category[equals]${id}` },
  });

  return {
    props: {
      category:data1
      blog: data,
    },
  };
};
