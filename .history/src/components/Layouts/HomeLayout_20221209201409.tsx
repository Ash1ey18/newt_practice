import React from "react";
import MemoFollowUs from "src/components/Layouts/FollowUs";
import Footer from "src/components/Layouts/Footer";
import Header from "src/components/Layouts/Header";
import IntroApp from "src/components/Layouts/IntroApp";
const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <IntroApp />
      <MemoFollowUs />
      <Footer />
    </>
  );
};

export default HomeLayout;
