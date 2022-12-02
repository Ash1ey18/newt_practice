import React from "react";

export default function Banner() {
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
