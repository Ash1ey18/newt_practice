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
    "img title"
    "img location" 1fr
    /128px 1fr;
  column-gap: 16px;

  @media only screen and (min-width: 640px) {
    height: 263px;
    grid-template:
      "img title" 1fr
      "img location" 1fr
      "img date" 1fr
      "img description" 1fr
      /280px 1fr;
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
`;

export const BtnDiv = styled.div`
  height: 48px;
  border: 1px solid #1f1f1f;
  border-radius: 30px;
  margin: 30px 24px 0 24px;
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
