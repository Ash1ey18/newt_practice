import React, { FC, PropsWithChildren } from "react";
import MemoFollowUs from "src/components/Layouts/FollowUs";
import Footer from "src/components/Layouts/Footer";
import MemoHeader from "src/components/Layouts/Header";
import IntroApp from "src/components/Layouts/IntroApp";
const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MemoHeader />
      {children}
      <IntroApp />
      <MemoFollowUs />
      <Footer />
    </>
  );
};

export default HomeLayout;
