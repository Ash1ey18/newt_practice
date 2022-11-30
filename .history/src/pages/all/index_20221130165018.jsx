/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { client } from "libs/client";
import BreadCrumb from "src/components/elements/BreadCrumb";
import ArticleList from "src/components/elements/ArticleList";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
export default function AllBlog({ blog }) {
  return (
    <>
      <BreadCrumb />
      <ArticleList blog={blog} />
    </>
  );
}
AllBlog.getLayout = getAreaLayout;
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { limit: 1000 },
  });
  return {
    props: {
      blog: data.contents,
    },
  };
};
