import React from "react";
import { client } from "libs/client";
import ArticleList from "src/components/elements/ArticleList";
import Layout from "src/components/Layout";
import BreadCrumb from "src/components/elements/BreadCrumb";
import ArticleHeading from "src/components/elements/ArticleHeading";
export default function TagId({ blog, tag }) {
  const tagObj = tag[0];

  return (
    <Layout>
      <BreadCrumb navObj={tagObj} />
      <ArticleHeading navObj={tagObj} />
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
