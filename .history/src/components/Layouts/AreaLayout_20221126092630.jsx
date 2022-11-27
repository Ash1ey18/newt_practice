import React from "react";
import FollowUs from "src/components/Layouts/FollowUs";
import Footer from "src/components/Layouts/Footer";
import Header from "src/components/Layouts/Header";
import IntroApp from "src/components/Layouts/IntroApp";
import RecomArticles from "src/components/Layouts/RecomArticles";

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

export const createGetAreaLayout = (layoutProps) => {
  console.log(layoutProps);
  return function getLayout(page) {
    return <AreaLayout {...layoutProps}>{page}</AreaLayout>;
  };
};
