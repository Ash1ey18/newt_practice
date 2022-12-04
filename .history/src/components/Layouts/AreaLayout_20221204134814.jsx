import { client } from "libs/client";
import React from "react";
import FollowUs from "src/components/Layouts/FollowUs";
import Footer from "src/components/Layouts/Footer";
import Header from "src/components/Layouts/Header";
import IntroApp from "src/components/Layouts/IntroApp";
import RecomArticles from "src/components/Layouts/RecomArticles";
import useSWR from "swr";

import HomeLayout from "./HomeLayout";
const fetcher = async () => {
  const blog = await client.get({
    endpoint: "blog",
    queries: {
      filters: "recommend[equals]true",
    },
  });
  return [...blog.contents];
};

export default function AreaLayout({ children }) {
  const { data } = useSWR(
    "https://newt-blog-demo.microcms.io/api/v1/blog?filters=recommend%5Bequals%5Dtrue",
    fetcher
  );
  return (
    <HomeLayout>
      {children}
      {data && <RecomArticles recomBlogs={data} />}
    </HomeLayout>
  );
}

export const getAreaLayout = (page) => {
  return <AreaLayout>{page}</AreaLayout>;
};
