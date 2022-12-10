import React from "react";

import { HeadingH1, HeadingWrapperDiv } from "./style";
const ArticleHeading = ({ navObj }) => {
  const name = navObj.name;
  return (
    <HeadingWrapperDiv>
      <HeadingH1>{name}の記事</HeadingH1>
    </HeadingWrapperDiv>
  );
};

export default ArticleHeading;
