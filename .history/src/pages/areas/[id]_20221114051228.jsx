import React from "react";
// import Layout from "src/components/Layout";

import { client } from "libs/client";
//areasでpagesを読み込みたい。
export default function CategoryId({ blog }) {
  if (blog.length === 0) {
    return <>該当ページはありませんでした。</>;
  }
  console.log(blog);
  return (
    <ul>
      {blog.map((_blog) => {
        return (
          <li key={_blog.id}>
            {_blog.title}
            {_blog.body}
          </li>
        );
      })}
    </ul>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/areas/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const data = await client.get({
    endpoint: "blog",
    queries: {
      filters: `category[contains]${id}`,
      ields: "title,publishedAt",
    },
  });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};
