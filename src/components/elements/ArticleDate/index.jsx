import React from "react";
import { StyledTime } from "./style";
//date-fsはここで処理を行う
export default function ArticleDate({ isTop, date }) {
  return (
    <StyledTime isTop={isTop || undefined} dateTime="">
      {date}
    </StyledTime>
  );
}
