import { blogMaxWidth, tabletWidth } from "src/variables";
import styled from "styled-components";
export const Article = styled.article`
  max-width: ${blogMaxWidth};
  margin: 0 auto;
  @media only screen and (min-width: ${tabletWidth}) {
    padding-top: 24px;
  }
`;
export const ImgWrapper = styled.span`
  position: relative;
  @media only screen and (min-width: ${tabletWidth}) {
    display: block;
    border-radius: 8px;
    overflow: hidden;
  }
  > span {
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: unset !important;
  }
`;

export const ContentsWrapper = styled.div`
  margin: 0 20px;
  @media only screen and (min-width: ${tabletWidth}) {
    margin: 0;
  }
`;
export const Header = styled.header`
  margin: 16px 0 0;
  padding: 0 0 16px;
  border-bottom: 1px solid #eee;
  @media only screen and (min-width: ${tabletWidth}) {
    margin-top: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: #000;
  margin: 8px 0 0;
  @media only screen and (min-width: ${tabletWidth}) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  color: #757575;
  letter-spacing: 0.05em;
  margin: 12px 0 0;
`;

export const LeadSentence = styled.p`
  margin: 32px 0 32px;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: 0.08em;
`;

export const BlogContents = styled.div`
  & h2 {
    position: relative;
    margin: 0;
    padding: 16px 0 14px;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.05em;
    color: #000;
    @media only screen and (min-width: ${tabletWidth}) {
      font-size: 28px;
      font-weight: 600;
      line-height: 42px;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 48px;
      background-color: #00cd67;
    }
  }
  & h3 {
    font-size: 18px;
    margin: 32px 0 0;
    @media only screen and (min-width: ${tabletWidth}) {
      margin-top: 40px;
      line-height: 33px;
    }
  }
  & img {
    border-radius: 4px;
    width: 100%;
  }
  & p {
    margin: 32px 0 0;
    color: #000;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 0.08em;
    word-break: break-all;
    @media only screen and (min-width: ${tabletWidth}) {
      font-size: 16px;
      line-height: 33px;
    }
  }
  & a {
    text-decoration: underline;
  }
`;
