import React from "react";
import ArticleHeading from "src/components/elements/ArticleHeading";
import BreadCrumb from "src/components/elements/BreadCrumb";
const NavigationHeading = ({ navObj }) => {
  return (
    <>
      <BreadCrumb navObj={navObj} />
      <ArticleHeading navObj={navObj} />
    </>
  );
};
export default NavigationHeading;
