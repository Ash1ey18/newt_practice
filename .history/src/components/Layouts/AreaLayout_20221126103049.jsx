import React from "react";
import FollowUs from "src/components/Layouts/FollowUs";
import Footer from "src/components/Layouts/Footer";
import Header from "src/components/Layouts/Header";
import IntroApp from "src/components/Layouts/IntroApp";
import RecomArticles from "src/components/Layouts/RecomArticles";

export default function AreaLayout({ children, recomBlogs }) {
  console.log(recomBlogs);
  return (
    <>
      <Header />
      {children}
      <RecomArticles recomBlogs={recomBlogs} />
      <IntroApp />
      <FollowUs />
      <Footer />
    </>
  );
}

export function getAreaLayout(page, layoutProps) {
  return <AreaLayout recomBlogs={layoutProps}>{page}</AreaLayout>;
}
