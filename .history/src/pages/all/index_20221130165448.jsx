/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { client } from "libs/client";
import BreadCrumb from "src/components/elements/BreadCrumb";
import ArticleList from "src/components/elements/ArticleList";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
export default function AllBlog({ blog, area }) {
  const areaObj = area[0];
  return (
    <>
      <BreadCrumb navObj={areaObj} />
      <ArticleList blog={blog} />
    </>
  );
}
AllBlog.getLayout = getAreaLayout;
export const getStaticProps = async () => {
  const allBlogData = await client.get({
    endpoint: "blog",
    queries: { limit: 1000 },
  });
  const areaNameData = await client.get({
    endpoint: "categories",
    queries: { filters: "id[equals]all" },
  });
  return {
    props: {
      blog: allBlogData.contents,
      area: areaNameData.contents,
    },
  };
};
