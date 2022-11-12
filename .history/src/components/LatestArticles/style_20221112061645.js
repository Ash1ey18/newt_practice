import styled from "styled-components";
import { TabletWidth, ContentsMaxWidth } from "src/variables";
export const ArticlesWraper = styled.div`
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 20px;
  @media only screen and (min-width: ${TabletWidth}) {
    margin: 16px auto 0;
    max-width: ${ContentsMaxWidth};
  }
`;

export const ArticleWraper = styled.div`
  height: 110px;
  padding: 12px 0;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: grid;
  grid-template:
    "img title"
    "img location" 1fr
    /128px 1fr;
  column-gap: 16px;

  @media only screen and (min-width: ${TabletWidth}) {
    height: auto;
    grid-template:
      "img title"
      "img location"
      "img date"
      "img description"
      / 280px 1fr;
    column-gap: 24px;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  > div:nth-child(1) {
    border-radius: 5px;
    overflow: hidden;
    grid-area: img;
  }
`;

export const Title = styled.h1`
  font-size: 12px;
  margin: 0;
  grid-area: title;
  & a:hover {
    opacity: 0.6;
  }
  @media only screen and (min-width: ${TabletWidth}) {
    font-size: 20px;
  }
`;

export const ArtiDescriotn = styled.p`
  margin: 2px 0 0 0;
  font-size: 14px;
  color: #1f1f1f;
  line-height: 24px;
  opacity: 0.7;
`;

export const BtnDiv = styled.div`
  height: 48px;
  width: 420px;

  border-radius: 30px;
  margin: 30px auto 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.03em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.6;
  }
`;
