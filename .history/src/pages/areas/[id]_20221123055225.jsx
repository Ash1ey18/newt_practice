import React from "react";
import Layout from "src/components/Layout";

import { client } from "libs/client";

export default function CategoryId({ blog }) {
  if (blog.length === 0) {
    return <>該当ページはありませんでした。</>;
  }
  return (
    <Layout>
      <ul>
        {blog.map((_blog) => {
          return <li key={_blog.id}>{_blog.title}</li>;
        })}
      </ul>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/areas/${content.id}`);
  console.log(paths);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const data = await client.get({
    endpoint: "blog",
    queries: {
      filters: `category[contains]${id}`,
    },
  });
  return {
    props: {
      blog: data.contents,
    },
  };
};
