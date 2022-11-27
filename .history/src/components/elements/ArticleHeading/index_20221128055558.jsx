import React from "react";
import { HeadingWrapperDiv, HeadingH1 } from "./style";
export default function ArticleHeading({ navObj }) {
  const areaName = navObj.name;
  return (
    <HeadingWrapperDiv>
      <HeadingH1>{areaName}の記事</HeadingH1>
    </HeadingWrapperDiv>
  );
}
