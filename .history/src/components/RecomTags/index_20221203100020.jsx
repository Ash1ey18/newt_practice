import Link from "next/link";
import React from "react";
import SectionWrapper from "src/components/elements/SectionWrapper";

import { StyledLi, StyledUl, TagsWrapperDiv } from "./style";

export default function RecomTags({ tags }) {
  return (
    <SectionWrapper>
      <h2>おすすめのタグ</h2>
      <TagsWrapperDiv>
        <StyledUl>
          {tags.map((tag) => {
            return (
              <StyledLi key={tag.id}>
                <Link href={`/tags/${tag.id}`}>
                  <a>#{tag.name}</a>
                </Link>
              </StyledLi>
            );
          })}
        </StyledUl>
      </TagsWrapperDiv>
    </SectionWrapper>
  );
}
