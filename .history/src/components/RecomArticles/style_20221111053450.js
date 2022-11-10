import styled from "styled-components";
import { TabletWidth } from "src/variables";
export const ArticlesWraper = styled.div`
  max-width: 1024px;
  margin: 19px 20px 0;
  display: grid;
  grid-template:
    "area area" 1fr
    "area area" 1fr
    "area area" 1fr
    /1fr 1fr;
  gap: 20px 15px;
  @media only screen and (min-width: ${TabletWidth}) {
    display: grid;
    grid-template:
      "area area area" 1fr
      "area area area" 1fr
      /1fr 1fr 1fr;
    gap: 26px;
    margin: 18px auto 0;
  }
`;
export const ArticleWraper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  @media only screen and (min-width: ${TabletWidth}) {
    display: flex;
    flex-direction: column;
  }
`;
export const ArticleContentdiv = styled.div`
  padding: 10px;
  @media only screen and (min-width: ${TabletWidth}) {
    padding: 16px;
    display: flex;
    flex: auto;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 12px;
  margin: 0;
  & a:hover {
    opacity: 0.6;
  }
  @media only screen and (min-width: ${TabletWidth}) {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: auto;
  }
`;
