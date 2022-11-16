import React from "react";
import { StyledTime } from "./style";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export default function ArticleDate({ isTop, date }) {
  const utcDate = date;
  const jstDate = utcToZonedTime(utcDate, "Asia/Tokyo");
  const jstString = format(jstDate, "yyyy-MM-dd");
  console.log(jstString);
  const displayDate = jstString.replace(
    /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
    "$1年$2月$3日"
  );
  return (
    <StyledTime isTop={isTop || undefined} dateTime={jstString}>
      {displayDate}
    </StyledTime>
  );
}
