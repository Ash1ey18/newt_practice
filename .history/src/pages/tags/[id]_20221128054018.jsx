import React from "react";
import { client } from "libs/client";
export default function TagId({ tags }) {
  return <div>test</div>;
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tags" });
  const paths = data.contents.map((content) => `/tags/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  console.log(ctx);
  const blogData = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: blogData,
    },
  };
};
