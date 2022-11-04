import React from "react";
import Link from "next/link";

import { StyledUl, StyledLi, StyledImage } from "./style";

import SectionWrapper from "src/components/SectionWrapper";

export default function FeatureAreass() {
  return (
    <SectionWrapper>
      <h2>注目のエリア</h2>
      <StyledUl>
        <StyledLi>
          <Link></Link>
          <StyledImage
            src="/img/img15.jpg"
            alt="Hawaii"
            layout="fill"
            objectFit="contain"
          />
        </StyledLi>
      </StyledUl>
    </SectionWrapper>
  );
}