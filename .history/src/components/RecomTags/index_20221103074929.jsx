import React from "react";
import SectionWrapper from "src/components/SectionWrapper";
import { TagsWrapperDiv, StyledUl } from "./style";

export default function RecomTags() {
  return (
    <SectionWrapper>
      <h2>オススメのタグ</h2>
      <TagsWrapperDiv>
        <StyledUl>
          <li>#ドバイ 観光</li>
          <li>#ドバイ 観光</li>
          <li>#ドバイ 観光</li>
          <li>#ドバイ 観光</li>
          <li>#ドバイ 観光</li>
          <li>#ドバイ 観光</li>
          <li>#ドバイ 観光</li>
          <li>#ドバイ 観光</li>
          <li>#ドバイ 観光</li>
        </StyledUl>
      </TagsWrapperDiv>
    </SectionWrapper>
  );
}
