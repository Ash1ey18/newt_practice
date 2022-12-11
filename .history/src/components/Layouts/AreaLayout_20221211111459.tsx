/*global JSX*/
import React, { FC, PropsWithChildren, ReactNode } from "react";
import RecomArticles from "src/components/Layouts/RecomArticles";
import { useRecomBlog } from "src/Hooks/useRecomBlog";

import MemoFollowUs from "./FollowUs";
import Footer from "./Footer";
import MemoHeader from "./Header";
import IntroApp from "./IntroApp";

const AreaLayout: FC<PropsWithChildren> = ({ children }) => {
  const { blog, isLoading, isError } = useRecomBlog();
  if (isLoading) {
    return (
      <>
        <MemoHeader />
        {children}
        {blog && <RecomArticles recomBlogs={blog} />}
        <IntroApp />
        <MemoFollowUs />
        <Footer />
      </>
    );
  }
  if (isError) {
    return <div>エラーです。</div>;
  }
  return (
    <>
      <MemoHeader />
      {children}
      {blog && <RecomArticles recomBlogs={blog} />}
      <IntroApp />
      <MemoFollowUs />
      <Footer />
    </>
  );
};

export const getAreaLayout = (page: ReactNode): JSX.Element => {
  return <AreaLayout>{page}</AreaLayout>;
};

export default AreaLayout;
