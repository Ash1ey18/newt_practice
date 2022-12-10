import Link from "next/link";
import React, { FC } from "react";
import SectionWrapper from "src/components/elements/SectionWrapper";
import { RecomTags_Props } from "src/types/article-type";

import { StyledLi, StyledUl, TagsWrapperDiv } from "./style";

const RecomTags: FC<RecomTags_Props> = ({ tags }) => {
  return (
    <SectionWrapper type="recomTags">
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
};
export default RecomTags;
