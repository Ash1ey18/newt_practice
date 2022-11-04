import styled from "styled-components";

export const ArticlesWraper = styled.div`
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ArticleWraper = styled.div`
  height: 110px;
  padding: 12px 0;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: grid;
  grid-template:
    "img title" 1fr
    "img location" 1fr
    /128px 1fr;
  column-gap: 16px;
  align-items: center;

  > div:nth-child(1) {
    border-radius: 5px;
    overflow: hidden;
    grid-area: img;
  }

  > h1 {
  }

  > div:nth-child(2) {
    margin-top: 6px;
    grid-area: location;
  }
`;

export const Title = styled.h1`
  font-size: 12px;
  margin: 0;
  grid-area: title;
`;