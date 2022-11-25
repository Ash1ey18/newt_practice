import styled from "styled-components";
import { tabletWidth } from "src/variables";
export const HeadingWrapperDiv = styled.div`
  height: 64px;
  padding: 18px 21px 19px;
  background-color: #e4f8ea;
`;

export const HeadingH1 = styled.h1`
  margin: 0;
  color: #000;
  letter-spacing: 0.05em;
  line-height: 27px;
  font-size: 18px;
  @media only screen and (min-width: ${tabletWidth}) {
    font-size: 22px;
    line-height: 33px;
    text-align: center;
  }
`;
