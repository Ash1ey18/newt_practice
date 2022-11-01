import styled from "styled-components";
import Image from "next/image";

export const RcmContainer = styled.section`
  width: 100%;
  height: 400px;
  /* background-color: red; */
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
  height: 18px;
`;
export const ArticleTitle = styled.h1`
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const ArticleInfo = styled.div`
  display: grid;
  grid-template-rows: 24px 24px;
  grid-template-columns: 32px 1fr;
  grid-template-areas:
    "areaA areaB"
    "areaA areaC";
`;

export const IconImage = styled(Image)`
  grid-area: "areaA";
`;

export const PubTime = styled.time`
  grid-area: "areaB";
  background-color: red;
`;

export const Author = styled.span`
  grid-area: "areaC";
  background-color: blue;
`;
