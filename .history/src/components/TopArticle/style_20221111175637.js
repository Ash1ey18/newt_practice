import styled from "styled-components";
import { TabletWidth } from "src/variables";

export const RcmContainer = styled.section`
  background-color: #e4f8ea;
  letter-spacing: 0.05em;
  width: 100%;
  @media only screen and (min-width: ${TabletWidth}) {
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
  @media only screen and (min-width: ${TabletWidth}) {
    height: 676px;
    padding-top: 56px;
    padding-bottom: 60px;
    display: grid;
    grid-template-columns: 640fr 456fr;
    column-gap: 56px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  max-width: 640px;

  > span {
    position: unset !important;
    &:hover {
      background-color: #ffff !important;
      opacity: 0.4 !important;
    }
    @media only screen and (min-width: ${TabletWidth}) {
      border-radius: 8px;
      overflow: hidden;
    }
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: unset !important;
  }
`;

export const Contents = styled.div`
  width: 100%;
  padding: 16px 20px 20px;
  @media only screen and (min-width: ${TabletWidth}) {
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
  @media only screen and (min-width: ${TabletWidth}) {
    letter-spacing: 0.05em;
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
  @media only screen and (min-width: ${TabletWidth}) {
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

export const Author = styled.div`
  font-size: 14px;
  font-weight: 600;
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
  @media only screen and (min-width: ${TabletWidth}) {
    font-size: 16px;
    height: 24px;
    gap: 6px;
  }
`;
