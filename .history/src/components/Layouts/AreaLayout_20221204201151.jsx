import React from "react";
import RecomArticles from "src/components/Layouts/RecomArticles";
import { useRecomBlog } from "src/Hooks/useRecomBlog";

import HomeLayout from "./HomeLayout";

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
