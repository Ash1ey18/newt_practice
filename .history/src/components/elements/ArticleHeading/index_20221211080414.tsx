import React, { FC } from "react";
import { BreadCrumb_ArticleHeading_Props } from "src/types/article-type";

import { HeadingH1, HeadingWrapperDiv } from "./style";
const ArticleHeading: FC<BreadCrumb_ArticleHeading_Props> = ({ navObj }) => {
  return (
    <HeadingWrapperDiv>
      <HeadingH1>{name}の記事</HeadingH1>
    </HeadingWrapperDiv>
  );
};

export default ArticleHeading;
