import React from "react";
import RecomArticles from "src/components/Layouts/RecomArticles";
import { useRecomBlog } from "src/Hooks/useRecomBlog";

import HomeLayout from "./HomeLayout";

export default function AreaLayout({ children }) {
  const {  user,
    isLoading,
    isError } = useRecomBlog();
  if()
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
