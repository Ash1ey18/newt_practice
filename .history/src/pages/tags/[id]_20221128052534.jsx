import React from "react";
import { client } from "libs/client";
export default function TagId() {
  return <div>test</div>;
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => {
    console.log(content)`/tags/${content.id}`;
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const blogData = await client.get({ endpoint: "blog", contentId: id });
  return {
    props: {
      blog: blogData,
    },
  };
};
