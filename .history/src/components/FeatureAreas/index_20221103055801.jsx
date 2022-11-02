import React from "react";
import { StyledUl, StyledLi, StyledDiv, StyledImage } from "./style";

import SectionWrapper from "src/components/SectionWrapper";

export default function FeatureAreass() {
  return (
    <SectionWrapper>
      <h2>注目のエリア</h2>
      <StyledUl>
        <StyledLi>
          <StyledDiv>
            <StyledImage
              src="/img/img15.jpg"
              alt="Hawaii"
              layout="fill"
              objectFit="contain"
            />
          </StyledDiv>
        </StyledLi>
      </StyledUl>
    </SectionWrapper>
  );
}
