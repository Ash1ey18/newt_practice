import styled from "styled-components";

export const ArticlesWraper = styled.div`
  margin: 19px 20px 0;
  display: grid;
  grid-template:
    "area area" 1fr
    "area area" 1fr
    "area area" 1fr
    /1fr 1fr;
  gap: 20px 15px;
  @media only screen and (min-width: 640px) {
    grid-template:
      "area area area" 318px
      "area area area" 318px
      /1fr 1fr 1fr;
    gap: 26px;
    margin: 18px 0;
  }
`;
export const ArticleWraper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;
export const ArticleContentdiv = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  font-size: 12px;
  margin: 0;
  & a:hover {
    opacity: 0.6;
  }
  @media only screen and (min-width: 640px) {
    font-size: 16px;
    line-height: 28px;
  }
`;
