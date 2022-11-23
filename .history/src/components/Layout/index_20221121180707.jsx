import React from "react";
import Header from "src/components/Layout/Header";
import IntroApp from "src/components/Layout/IntroApp";
import FollowUs from "src/components/Layout/FollowUs";
import Footer from "src/components/Layout/Footer";

import BreadCrumb from "../elements/BreadCrumb";
export default function Layout({ children }) {
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
