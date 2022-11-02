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
          <li>#ドバイ ホテル</li>
          <li>#オーストラリア 観光</li>
          <li>##イタリア 観光</li>
          <li>#カナダ 観光</li>
          <li>#ドバイ ホテル</li>
          <li>#トルコ 観光</li>
          <li>#シンガポール ホテル</li>
          <li>#ドバイ ホテル</li>
          <li>#シンガポール 観光</li>
          <li>#韓国 観光</li>
          <li>#オーストラリア 観光</li>
          <li>#ハウツー</li>
          <li>#ドバイ ホテル</li>
          <li>#ドバイ ホテル</li>
        </StyledUl>
      </TagsWrapperDiv>
    </SectionWrapper>
  );
}
