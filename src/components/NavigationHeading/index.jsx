import React from "react";
import BreadCrumb from "src/components/elements/BreadCrumb";
import ArticleHeading from "src/components/elements/ArticleHeading";
export default function NavigationHeading({ navObj }) {
  return (
    <>
      <BreadCrumb navObj={navObj} />
      <ArticleHeading navObj={navObj} />
    </>
  );
}
