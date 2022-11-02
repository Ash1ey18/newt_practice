import styled from "styled-components";

export const ArticlesWraper = styled.div`
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ArticleWraper = styled.div`
  padding: 12px 0;
  border-bottom: 0.1px solid black;
  display: grid;
  grid-template:
    "img title" 54px
    "img location" 18px
    /128px 1fr;
`;
