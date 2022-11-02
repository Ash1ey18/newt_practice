import React from "react";
import SectionWrapper from "src/components/SectionWrapper";
import { TagsWrapperDiv, StyledUl } from "./style";

export default function RecomTags() {
  return (
    <SectionWrapper>
      <h2>オススメのタグ</h2>
      <TagsWrapperDiv>
        <StyledUl>
          <li>#ドバイ</li>
          <li>#ドバイ</li>
          <li>#ドバイ</li>
          <li>#ドバイ</li>
          <li>#ドバイ</li>
          <li>#ドバイ</li>
          <li>#ドバイ</li>
          <li>#ドバイ</li>
          <li>#ドバイ</li>
        </StyledUl>
      </TagsWrapperDiv>
    </SectionWrapper>
  );
}
