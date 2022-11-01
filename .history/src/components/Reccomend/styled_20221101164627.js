import styled from "styled-components";

export const RcmContainer = styled.section`
  width: 100%;
  height: 400px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
  > span {
    position: unset !important;
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
  display: grid;
  grid-template:
    "areaA areaB" 24px
    "areaA areaC" 24px
    / 32px 1fr;
  column-gap: 16px;
  align-items: center;
`;
export const IconImage = styled.img`
  display: block;
  grid-column: 1;
  grid-row: 1/2;
`;

export const PubTime = styled.time`
  grid-area: "areaB";
`;

export const Author = styled.div`
  grid-area: "areaC";
`;
