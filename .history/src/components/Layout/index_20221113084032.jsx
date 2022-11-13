import React from "react";
import Header from "src/components/Header";
import IntroApp from "src/components/IntroApp";
import FollowUs from "src/components/FollowUs";
import Footer from "src/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <IntroApp />
      <FollowUs />
      <Footer />
    </>
  );
}
