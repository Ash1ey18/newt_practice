/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { client } from "libs/client";
import Layout from "src/components/Layout";
import ArticleList from "src/components/elements/ArticleList";
export default function AllBlog({ blog }) {
  return (
    <Layout>
      <ArticleList blog={blog} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
  });
  return {
    props: {
      blog: data.contents,
    },
  };
};
