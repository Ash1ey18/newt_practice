import React from "react";
import Link from "next/link";
import Image from "next/image";

import { StyledUl, StyledLi, StyledDiv } from "./style";

import SectionWrapper from "src/components/elements/SectionWrapper";

export default function FeatureAreass() {
  return (
    <SectionWrapper>
      <h2>注目のエリア</h2>
      <StyledUl>
        <StyledLi>
          <Link href="">
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
          <Link href="">
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
          <Link href="">
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
          <Link href="">
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
          <Link href="">
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
          <Link href="">
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
          <Link href="">
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
          <Link href="">
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
          <Link href="">
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
          <Link href="">
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
          <Link href="">
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
