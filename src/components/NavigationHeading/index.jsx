import React from "react";
import ArticleHeading from "src/components/elements/ArticleHeading";
import BreadCrumb from "src/components/elements/BreadCrumb";
export default function NavigationHeading({ navObj }) {
  return (
    <>
      <BreadCrumb navObj={navObj} />
      <ArticleHeading navObj={navObj} />
    </>
  );
}
