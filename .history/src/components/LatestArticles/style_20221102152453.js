import styled from "styled-components";

export const ArticlesWraper = styled.div`
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ArticleWraper = styled.div`
  height: 360px;
  padding: 12px 0;
  border-bottom: 1px solid black;
  display: grid;
  grid-template:
    "img title" 54px
    "img location" 18px
    /128px 1fr;
  column-gap: 16px;
  align-items: center;
  > div:nth-child(1) {
    grid-area: img;
  }
  > h1 {
    font-size: 12px;
    margin: 0;
    grid-area: title;
  }
  > div:nth-child(2) {
    grid-area: location;
  }
`;