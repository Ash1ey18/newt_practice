import { client } from "libs/client";
import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const blog = await client.get({
    endpoint: "blog",
    queries: {
      filters: "recommend[equals]true",
    },
  });
  return [...blog.contents];
};
const { data } = useSWR(
  "https://newt-blog-demo.microcms.io/api/v1/blog?filters=recommend%5Bequals%5Dtrue",
  fetcher
);
