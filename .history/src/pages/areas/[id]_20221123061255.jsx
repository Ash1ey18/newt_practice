import React from "react";
import Layout from "src/components/Layout";

import { client } from "libs/client";
// import BreadCrumb from "src/components/elements/BreadCrumb";

export default function CategoryId({ blog }) {
  console.log(blog);
  if (blog.length === 0) {
    return <>該当ページはありませんでした。</>;
  }
  return (
    <Layout>
      {/* <BreadCrumb areaObj={}/> */}
      <ul>
        {blog.map((_blog) => {
          return <li key={_blog.id}>{_blog.title}</li>;
        })}
      </ul>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/areas/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  console.log(id);
  const data = await client.get({
    endpoint: "blog",
    queries: {
      filters: `category[contains]${id}`,
    },
  });
  return {
    props: {
      blog: data.contents,
    },
  };
};
