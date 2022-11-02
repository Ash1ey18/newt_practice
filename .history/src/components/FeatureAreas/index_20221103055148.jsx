import React from "react";
import { StyledUl, StyledLi, StyledImage } from "./style";

import SectionWrapper from "src/components/SectionWrapper";

export default function FeatureAreass() {
  return (
    <SectionWrapper>
      <h2>注目のエリア</h2>
      <StyledUl>
        <StyledLi>
          <StyledImage
            src="/img/img15.jpg"
            alt="Hawaii"
            width={100}
            height={100}
          />
        </StyledLi>
      </StyledUl>
    </SectionWrapper>
  );
}
