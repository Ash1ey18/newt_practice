import React from "react";
import Header from "src/components/Layouts/Header";
import IntroApp from "src/components/Layouts/IntroApp";
import FollowUs from "src/components/Layouts/FollowUs";
import Footer from "src/components/Layouts/Footer";
export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <IntroApp />
      <FollowUs />
      <Footer />
    </>
  );
}

export const getHomeLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};
