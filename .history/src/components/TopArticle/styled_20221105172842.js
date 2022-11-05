import styled from "styled-components";

export const RcmContainer = styled.section`
  position: relative;
  width: 100%;
  height: 50vh;
`;
export const TopArticleWraper = styled.div`
  background-color: #e4f8ea;
  width: 100%;
  padding: 16px 20px;
  @media only screen and (min-width: 600px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -100;
    width: 60%;
    height: 100%;
  }
`;
export const LocationKwdWraper = styled.div`
  height: 20px;
`;
export const ArticleTitle = styled.h1`
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 0;
  & a:hover {
    opacity: 0.6;
  }
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

export const PubTime = styled.time`
  font-size: 12px;
  opacity: 0.7;
  grid-area: areaB;
`;

export const Author = styled.div`
  font-size: 14px;
  grid-area: areaC;
`;

export const Location = styled.div`
  height: 18px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 2px;
  grid-area: location;
  & a {
    color: #00cd67;
    &:hover {
      opacity: 0.6;
    }
  }
`;

export const TabImgWrapper = styled.div`
  position: relative;
  width: 50%;
  border-radius: 13px;
  overflow: hidden;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      z-index: 100;
      display: block;
      height: 100%;
      width: 100%;
      background-color: #ffff;
      opacity: 0.4;
    }
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
