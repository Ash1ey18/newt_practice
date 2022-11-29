import React from "react";
import { client } from "libs/client";
export default function TagId() {
  return <div>test</div>;
}

export const getStaticPaths = async () => {
  const blogData = await client.get({ endpoint: "blog" });
  const paths = blogData.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};
