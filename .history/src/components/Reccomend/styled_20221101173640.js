import styled from "styled-components";
import Image from "next/Image";

export const RcmContainer = styled.section`
  width: 100%;
  height: 400px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 62%;
  /* position: relative; */
  > span {
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: unset !important;
  }
`;

export const TopArticleWraper = styled.div`
  background-color: #e4f8ea;
  width: 100%;
  padding: 16px 20px;
`;
export const LocationKwdWraper = styled.div`
  height: 20px;
`;
export const ArticleTitle = styled.h1`
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const ArticleInfo = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template:
    "areaA areaB" 24px
    "areaA areaC" 24px
    / 32px 1fr;
  column-gap: 16px;
  align-items: center;
  > span:nth-child(1) {
    grid-area: areaA;
  }
`;
export const IconImage = styled(Image)``;

export const PubTime = styled.time`
  font-size: 12px;
  opacity: 0.7;
  grid-area: areaB;
`;

export const Author = styled.div`
  font-size: 14px;
  grid-area: areaC;
`;
