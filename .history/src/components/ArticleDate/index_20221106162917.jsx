import React from "react";
import { StyledTime } from "./style";
//date-fsはここで処理を行う
export default function ArticleDate({ date }) {
  return <StyledTime dateTime="">{date}</StyledTime>;
}
