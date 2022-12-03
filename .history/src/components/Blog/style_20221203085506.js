import { blogMaxWidth } from "src/variables";
import styled from "styled-components";
export const Article = styled.article`
  max-width: ${blogMaxWidth};
`;
export const TopImgWrapper = styled.div`
  position: relative;
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
`;
export const Header = styled.header`
  margin: 16px 0 0;
  padding: 0 0 16px;
  border-bottom: 1px solid #eee;
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: #000;
  margin: 8px 0 0;
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
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 48px;
      background-color: #00cd67;
    }
  }
  & img {
    border-radius: 4px;
    width: 100%;
  }
`;
