import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
import { BannerWrapper, Heading, BannerTitle } from "./style";
export default function Banner() {
  const [isTablet, setIsTablet] = useState(useTabletMqContext());
  useEffect(() => {
    setIsTablet((prev) => !prev);
  }, []);
  return (
    <BannerWrapper>
      <Heading>
        <Image
          src="/img/newtbigicon.svg"
          alt="newt icon"
          width={isTablet ? 80 : 48}
          height={isTablet ? 80 : 48}
        />
        <BannerTitle>{`NEWT（ニュート)\nスマートに海外旅行`}</BannerTitle>
      </Heading>
    </BannerWrapper>
  );
}
