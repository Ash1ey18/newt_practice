import React from "react";
import RecomArticles from "src/components/Layouts/RecomArticles";
import { useRecomBlog } from "src/Hooks/useRecomBlog";

export default function AreaLayout({ children }) {
  const { blog, isLoading, isError } = useRecomBlog();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>エラーです。</div>;
  }
  return (
    <>
      {children}
      {blog && <RecomArticles recomBlogs={blog} />}
    </>
  );
}

export const getAreaLayout = (page) => {
  return <AreaLayout>{page}</AreaLayout>;
};
