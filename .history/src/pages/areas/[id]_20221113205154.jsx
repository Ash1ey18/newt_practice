import React from "react";
// import Layout from "src/components/Layout";

import { client } from "libs/client";
//areasでpagesを読み込みたい。
export default function CategoryId({ category }) {
  return <div>{category.name}</div>;
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/areas/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const data = await client.get({ endpoint: "categories", contentId: id });
  const blogDatas = await client.get({
    endpoint: "blog",
  });
  // console.log(blogDatas);
  console.log(blogDatas.contents.filter((blog) => blog.category.isArry));
  // const categorizedBlogData = blogDatas.filter((blog) => { blog.
  // })
  return {
    props: {
      category: data,
    },
  };
};
