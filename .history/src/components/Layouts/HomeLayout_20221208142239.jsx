import React from "react";
import FollowUs from "src/components/Layouts/FollowUs";
import Footer from "src/components/Layouts/Footer";
import Header from "src/components/Layouts/Header";
import IntroApp from "src/components/Layouts/IntroApp";
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
