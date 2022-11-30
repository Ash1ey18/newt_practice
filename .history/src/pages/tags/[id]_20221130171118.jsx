import React from "react";
import { client } from "libs/client";
import ArticleList from "src/components/elements/ArticleList";
import NavigationHeading from "src/components/NavigationHeading";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
export default function TagHome({ blog, tag }) {
  const tagObj = tag[0];

  return (
    <>
      <NavigationHeading navObj={tagObj} />

      <ArticleList blog={blog} />
    </>
  );
}

TagHome.getLayout = getAreaLayout;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tags", queries: { limit: 50 } });
  const paths = data.contents.map((content) => `/tags/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
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
      blog: blogData.contents,
      tag: tagData.contents,
    },
  };
};
