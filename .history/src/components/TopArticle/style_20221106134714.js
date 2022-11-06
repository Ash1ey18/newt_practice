import styled from "styled-components";

export const RcmContainer = styled.section`
  background-color: #e4f8ea;
  letter-spacing: 0.05em;
  width: 100%;
  @media only screen and (min-width: 640px) {
    position: relative;
    z-index: -100;
    background: linear-gradient(
      90deg,
      transparent,
      transparent 50%,
      #e4f8ea 0,
      #e4f8ea
    );
  }
`;
export const TopArticleWraper = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 640px) {
    padding-top: 56px;
    padding-bottom: 60px;
    display: flex;
    justify-content: space-between;
  }
`;
export const Contents = styled.div`
  width: 100%;
  padding: 16px 20px 20px;
  @media only screen and (min-width: 640px) {
    width: 40%;
    height: 100%;
    padding: 0;
  }
`;
export const ArticleTitle = styled.h1`
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 0;
  & a:hover {
    opacity: 0.6;
  }
  @media only screen and (min-width: 640px) {
    /* letter-spacing: 0.05em; */
    font-size: 28px;
    line-height: 48px;
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
  @media only screen and (min-width: 640px) {
    margin-top: 16px;
  }
`;

export const Descriotionp = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #1f1f1f;
  margin-top: 16px;
  margin-bottom: 0;
`;

export const PubTime = styled.time`
  font-size: 12px;
  opacity: 0.7;
  grid-area: areaB;
`;

export const Author = styled.div`
  font-size: 14px;
  font-weight: 600;
  grid-area: areaC;
`;

export const Location = styled.div`
  height: 18px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 4px;
  grid-area: location;
  & a {
    color: #00cd67;
    &:hover {
      opacity: 0.6;
    }
  }
  @media only screen and (min-width: 640px) {
    margin-top: 16px;
    font-size: 16px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  max-width: 640px;
  @media only screen and (min-width: 640px) {
    width: 54%;
  }
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
    @media only screen and (min-width: 640px) {
      border-radius: 5px;
      overflow: hidden;
    }
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: unset !important;
  }
`;
