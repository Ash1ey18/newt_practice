import React from "react";
import Link from "next/link";

import { StyledUl, StyledLi, StyledDiv, StyledImage } from "./style";

import SectionWrapper from "src/components/SectionWrapper";

export default function FeatureAreass() {
  return (
    <SectionWrapper>
      <h2>注目のエリア</h2>
      <StyledUl>
        <StyledLi>
          <Link href="">
            <StyledDiv content="はわぁうぃ">
              <StyledImage
                src="/img/img15.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="contain"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
      </StyledUl>
    </SectionWrapper>
  );
}
