import React, { FC } from "react";
import ArticleHeading from "src/components/elements/ArticleHeading";
import BreadCrumb from "src/components/elements/BreadCrumb";
import { BreadCrumb_ArticleHeading_Props } from "src/types/article-type";
const NavigationHeading: FC<BreadCrumb_ArticleHeading_Props> = ({ navObj }) => {
  return (
    <>
      <BreadCrumb navObj={navObj} />
      <ArticleHeading navObj={navObj} />
    </>
  );
};
export default NavigationHeading;
