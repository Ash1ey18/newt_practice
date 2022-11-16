import React from "react";
import { StyledTime } from "./style";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export default function ArticleDate({ isTop, date }) {
  const utcDate = date;
  //=> 2000-01-01T00:00:00.000Z

  const jstDate = utcToZonedTime(utcDate, "Asia/Tokyo");
  //=> 2000-01-01T09:00:00.000Z

  const jstString = format(jstDate, "yyyy-MM-dd");
  //=> "2000-01-01 09:00:00"
  return (
    <StyledTime isTop={isTop || undefined} dateTime="">
      {date}
    </StyledTime>
  );
}
