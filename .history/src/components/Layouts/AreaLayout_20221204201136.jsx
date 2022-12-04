import React from "react";
import RecomArticles from "src/components/Layouts/RecomArticles";
import { useRecomBlog } from "src/Hooks/useRecomBlog";
import { SWRConfig } from "swr";

import HomeLayout from "./HomeLayout";

const options = { revalidateOnFocus: false, revalidateOnReconnect: false };
export default function AreaLayout({ children }) {
  const { blog, isLoading, isError } = useRecomBlog();
  console.log("AreaLayout is rendered");
  if (isLoading) {
    console.log("%cNow Loading...", "color:red");
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>エラーです。</div>;
  }
  return (
    <HomeLayout>
      {children}
      {blog && <RecomArticles recomBlogs={blog} />}
    </HomeLayout>
  );
}

export const getAreaLayout = (page) => {
  return <AreaLayout>{page}</AreaLayout>;
};
