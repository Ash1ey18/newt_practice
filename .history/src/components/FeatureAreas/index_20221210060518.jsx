import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionWrapper from "src/components/elements/SectionWrapper";

import { StyledDiv, StyledLi, StyledUl } from "./style";

export default function FeatureAreas() {
  return (
    <SectionWrapper>
      <h2>注目のエリア</h2>
      <StyledUl>
        <StyledLi>
          <Link href="/areas/hawaii">
            <StyledDiv content="ハワイ">
              <Image
                src="/img/img15.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="cover"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/areas/thailand">
            <StyledDiv content="タイ">
              <Image
                src="/img/img16.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="cover"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/areas/guam">
            <StyledDiv content="グアム">
              <Image
                src="/img/img17.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="cover"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/areas/hongkong">
            <StyledDiv content="香港">
              <Image
                src="/img/img18.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="cover"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/areas/vietnam">
            <StyledDiv content="ベトナム">
              <Image
                src="/img/img19.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="cover"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/areas/singapore">
            <StyledDiv content="シンガポール">
              <Image
                src="/img/img20.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="cover"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/areas/philippines">
            <StyledDiv content="フィリピン">
              <Image
                src="/img/img21.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="cover"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/areas/korea">
            <StyledDiv content="韓国">
              <Image
                src="/img/img22.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="cover"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/areas/taiwan">
            <StyledDiv content="台湾">
              <Image
                src="/img/img23.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="cover"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/areas/newyork">
            <StyledDiv content="ニューヨーク">
              <Image
                src="/img/img24.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="cover"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/areas/australia">
            <StyledDiv content="オーストラリア">
              <Image
                src="/img/img25.jpg"
                alt="Hawaii"
                layout="fill"
                objectFit="cover"
              />
            </StyledDiv>
          </Link>
        </StyledLi>
      </StyledUl>
    </SectionWrapper>
  );
}
