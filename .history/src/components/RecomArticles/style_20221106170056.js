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
    display: flex;
    flex-wrap: wrap;
    gap: 26px;
    margin: 18px 0;
  }
`;
export const ArticleWraper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  @media only screen and (min-width: 640px) {
    flex-basis: 30%;
  }
`;
export const ArticleContentdiv = styled.div`
  padding: 10px;
  @media only screen and (min-width: 640px) {
    padding: 16px;
    display: flex;
    flex-direction: column;
    height: 60%;
  }
`;

export const Title = styled.h1`
  font-size: 12px;
  margin: 0;
  & a:hover {
    opacity: 0.6;
  }
  @media only screen and (min-width: 640px) {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: auto;
  }
`;
