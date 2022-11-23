import React from "react";
import { client } from "libs/client";

import Layout from "src/components/Layout";

export default function AllBlog() {
  return <Layout></Layout>;
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
  });
  return {
    props: {
      blog: data.contents,
    },
  };
};
