import React from "react";
import Image from "next/image";

import { useTabletMqContext } from "src/Context/MediaQueryContext";
export default function Banner() {
  const isTablet = useTabletMqContext();
  return (
    <BannerWrapper>
      <StyledWrapperdiv>
        <Image
          src="/img/newtbigicon.svg"
          alt="newt icon"
          width={isTablet ? 80 : 48}
          height={isTablet ? 80 : 48}
        />
        <StyledSpan>{`NEWT（ニュート)\nスマートに海外旅行`}</StyledSpan>
      </StyledWrapperdiv>
    </BannerWrapper>
  );
}
