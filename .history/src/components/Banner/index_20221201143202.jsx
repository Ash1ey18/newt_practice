import React, { useEffect } from "react";
import Image from "next/image";
import { StyledWrapperdiv } from "../Layouts/IntroApp/style";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
export default function Banner() {
  useEffect(() => {
    const isTablet = useTabletMqContext;
  });
  return (
    <StyledWrapperdiv>
      <Image
        src="/img/newtbigicon.svg"
        alt="newt icon"
        width={isTablet ? 80 : 48}
        height={isTablet ? 80 : 48}
      />
      <StyledSpan>{`NEWT（ニュート)\nスマートに海外旅行`}</StyledSpan>
    </StyledWrapperdiv>
  );
}
