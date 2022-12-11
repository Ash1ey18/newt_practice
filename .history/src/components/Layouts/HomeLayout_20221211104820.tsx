/*global JSX*/

import React, { FC, PropsWithChildren, ReactNode } from "react";
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

export const getHomeLayout = (page: ReactNode): JSX.Element => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default HomeLayout;
