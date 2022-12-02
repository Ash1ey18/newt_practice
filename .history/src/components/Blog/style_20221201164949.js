import styled from "styled-components";
// import { blogMaxWidth } from "src/variables";
export const Article = styled.article`
  max-width: 720px;
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

export const Header = styled.header`
  margin: 16px 20px 0;
  padding: 0 0 16px;
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
