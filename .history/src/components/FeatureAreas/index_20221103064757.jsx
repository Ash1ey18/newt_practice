import React from "react";
import Link from "next/link";
import Image from "next/image";

import { StyledUl, StyledLi, StyledDiv } from "./style";

import SectionWrapper from "src/components/SectionWrapper";

export default function FeatureAreass() {
  return (
    <SectionWrapper>
      <h2>注目のエリア</h2>
      <StyledUl>
        <StyledLi>
          <Link href="">
            <StyledDiv content="はわぁうぃ">
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
            <StyledDiv content="はわぁうぃ">
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
            <StyledDiv content="はわぁうぃ">
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
            <StyledDiv content="はわぁうぃ">
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
            <StyledDiv content="はわぁうぃ">
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
            <StyledDiv content="はわぁうぃ">
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
            <StyledDiv content="はわぁうぃ">
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
            <StyledDiv content="はわぁうぃ">
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
            <StyledDiv content="はわぁうぃ">
              <Image
                src="/img/img15.jpg"
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
