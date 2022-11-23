import React from "react";
import { client } from "libs/client";

import Layout from "src/components/Layout";

export default function AllBlog() {
  return <Layout></Layout>;
}

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
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
