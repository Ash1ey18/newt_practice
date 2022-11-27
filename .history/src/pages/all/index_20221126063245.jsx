/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { client } from "libs/client";
import ArticleList from "src/components/elements/ArticleList";
export default function AllBlog({ blog }) {
  return (
    <>
      <ArticleList blog={blog} />
    </>
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
