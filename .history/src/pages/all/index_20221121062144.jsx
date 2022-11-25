import React from "react";
import { client } from "libs/client";

import Layout from "src/components/Layout";

export default function AllBlog({ blog }) {
  return (
    <Layout>
      <ul>
        {blog.map((_blog) => {
          return <li key={_blog.id}></li>;
        })}
      </ul>
    </Layout>
  );
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