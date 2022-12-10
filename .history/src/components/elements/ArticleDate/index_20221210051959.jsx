import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import React from "react";

import { StyledTime } from "./style";

const ArticleDate = ({ isTop, utcDate }) => {
  const newUtcDate = utcDate;
  const jstDate = utcToZonedTime(newUtcDate, "Asia/Tokyo");
  const jstString = format(jstDate, "yyyy-MM-dd");
  const displayDate = jstString.replace(
    /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
    "$1年$2月$3日"
  );
  return (
    <StyledTime isTop={isTop || undefined} dateTime={jstString}>
      {displayDate}
    </StyledTime>
  );
};
