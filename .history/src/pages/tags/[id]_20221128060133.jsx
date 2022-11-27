import React from "react";
import { client } from "libs/client";
import ArticleList from "src/components/elements/ArticleList";
import Layout from "src/components/Layout";
import BreadCrumb from "src/components/elements/BreadCrumb";
export default function TagId({ blog, tag }) {
  const tagObj = tag[0];
  console.log(tagObj);
  return (
    <Layout>
      <BreadCrumb navObj={tagObj} />
      <ArticleList blog={blog} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tags", queries: { limit: 50 } });
  const paths = data.contents.map((content) => `/tags/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const blogData = await client.get({
    endpoint: "blog",
    queries: { filters: `tags[contains]${id}`, limit: 100 },
  });
  const tagData = await client.get({
    endpoint: "tags",
    queries: { filters: `id[equals]${id}` },
  });
  return {
    props: {
      blog: blogData.contents,
      tag: tagData.contents,
    },
  };
};
