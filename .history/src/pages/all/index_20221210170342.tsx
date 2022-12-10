/* eslint-disable jsx-a11y/anchor-is-valid */
import { client } from "libs/client";
import { NextPageWithLayout } from "next";
import React from "react";
import ArticleList from "src/components/elements/ArticleList";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
import NavigationHeading from "src/components/NavigationHeading";
import { AllBlog_Props } from "src/types/page-type";
const AllBlog: NextPageWithLayout<AllBlog_Props> = ({ blog, area }) => {
  const areaObj = area[0];
  return (
    <>
      <NavigationHeading navObj={areaObj} />
      <ArticleList blog={blog} />
    </>
  );
};
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
export default AllBlog;