/* eslint-disable jsx-a11y/anchor-is-valid */
import { client } from "libs/client";
import { GetStaticProps, NextPageWithLayout } from "next";
import React from "react";
import ArticleList from "src/components/elements/ArticleList";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
import NavigationHeading from "src/components/NavigationHeading";
import { AllBlog_Props } from "src/types/page-type";
const AllBlog: NextPageWithLayout<AllBlog_Props> = ({ blogs, areas }) => {
  const areaObj = areas[0];
  return (
    <>
      <NavigationHeading navObj={areaObj} />
      <ArticleList blogs={blogs} />
    </>
  );
};
AllBlog.getLayout = getAreaLayout;
export const getStaticProps: GetStaticProps<AllBlog_Props> = async () => {
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
      blogs: allBlogData.contents,
      areas: areaNameData.contents,
    },
  };
};
export default AllBlog;
