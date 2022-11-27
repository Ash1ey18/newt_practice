import React from "react";
import FollowUs from "src/components/Layouts/FollowUs";
import Footer from "src/components/Layouts/Footer";
import Header from "src/components/Layouts/Header";
import IntroApp from "src/components/Layouts/IntroApp";
import RecomArticles from "src/components/Layouts/RecomArticles";

//   const recomBlog = blog.filter((_blog) => _blog.recommend);
//   <RecomArticles recomBlog={recomBlog} />

export default function AreaLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <RecomArticles />
      <IntroApp />
      <FollowUs />
      <Footer />
    </>
  );
}

export const getAreaLayout = (page) => {
  return <AreaLayout>{page}</AreaLayout>;
};
