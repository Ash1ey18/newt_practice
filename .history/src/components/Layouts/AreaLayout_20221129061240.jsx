import React from "react";
import useSWR from "swr";
import FollowUs from "src/components/Layouts/FollowUs";
import Footer from "src/components/Layouts/Footer";
import Header from "src/components/Layouts/Header";
import IntroApp from "src/components/Layouts/IntroApp";
import RecomArticles from "src/components/Layouts/RecomArticles";

export default function AreaLayout({ children }) {
  const { data, error } = useSWR("/api/", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
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

export const getAreaLayout = (page) => {
  return <AreaLayout>{page}</AreaLayout>;
};
