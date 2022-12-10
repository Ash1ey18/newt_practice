import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import React, { FC } from "react";
import { ArticleDate_Props } from "src/types/article-type";

import { StyledTime } from "./style";

const ArticleDate: FC<ArticleDate_Props> = ({ isTop, utcDate }) => {
  if (typeof utcDate === "string") {
    const jstDate = utcToZonedTime(utcDate, "Asia/Tokyo");
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
  }
};

export default ArticleDate;
