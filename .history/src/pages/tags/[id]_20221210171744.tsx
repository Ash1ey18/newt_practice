import { client } from "libs/client";
import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";
import React from "react";
import ArticleList from "src/components/elements/ArticleList";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
import NavigationHeading from "src/components/NavigationHeading";
import { GetsType, Tag } from "src/types/cms-types";
import { GetStaticProps_Params, TagHome_Props } from "src/types/page-type";
const TagHome: NextPageWithLayout<TagHome_Props> = ({ blogs, tags }) => {
  const tagObj = tags[0];
  if (blogs.length === 0) {
    return <h1>404:該当ページはありませんでした。</h1>;
  }

  return (
    <>
      <NavigationHeading navObj={tagObj} />
      <ArticleList blog={blogs} />
    </>
  );
};

TagHome.getLayout = getAreaLayout;

export const getStaticPaths: GetStaticPaths<
  GetStaticProps_Params
> = async () => {
  const data: GetsType<Tag> = await client.get({
    endpoint: "tags",
    queries: { limit: 50 },
  });
  const paths = data.contents.map((content) => `/tags/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  TagHome_Props,
  GetStaticProps_Params
> = async (ctx) => {
  const id = typeof ctx.params?.id === "string" ? ctx.params.id : "";
  const tagData = await client.get({
    endpoint: "tags",
    queries: { filters: `id[equals]${id}` },
  });
  const tagName = tagData.contents[0].name;
  const tagArry = tagName.split(" ");
  const blogData = await client.get({
    endpoint: "blog",
    queries: {
      filters: `${tagArry.map((tagElement) => `body[contains]${tagElement}`)}`,
      limit: 100,
    },
  });

  return {
    props: {
      blogs: blogData.contents,
      tags: tagData.contents,
    },
  };
};

export default TagHome;
