/*global JSX*/
import React, { FC, PropsWithChildren, ReactNode } from "react";
import RecomArticles from "src/components/Layouts/RecomArticles";
import { useRecomBlog } from "src/Hooks/useRecomBlog";

type ComponentWithChildrenProps = PropsWithChildren;

const AreaLayout: FC<ComponentWithChildrenProps> = ({ children }) => {
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
};

export const getAreaLayout = (page: ReactNode): JSX.Element => {
  return <AreaLayout>{page}</AreaLayout>;
};

export default AreaLayout;
