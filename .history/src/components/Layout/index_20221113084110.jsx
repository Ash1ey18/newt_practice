import React from "react";
import Header from "src/components/Layout/Header";
import IntroApp from "src/components/IntroApp";
import FollowUs from "src/components/FollowUs";
import Footer from "src/components/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <IntroApp />
      <FollowUs />
      <Footer />
    </>
  );
}
