import React from "react";
import { client } from "libs/client";
export default function TagId({ blog }) {
  return (
    <div>
      test
      {blog.map((_blog) => {
        console.log(_blog);
      })}
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tags" });
  const paths = data.contents.map((content) => `/tags/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  //   const id = ctx.params.id;
  const blogData = await client.get({
    endpoint: "blog",
    // queries: { filters: `id[equals]${id}` },
  });
  return {
    props: {
      blog: blogData,
    },
  };
};
