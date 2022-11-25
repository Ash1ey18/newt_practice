import React from "react";
import { HeadingWrapperDiv, HeadingH1 } from "./style";
export default function ArticleHeading({ areaObj }) {
  const areaName = areaObj.name;
  return (
    <HeadingWrapperDiv>
      <HeadingH1>アジアの記事</HeadingH1>
    </HeadingWrapperDiv>
  );
}
