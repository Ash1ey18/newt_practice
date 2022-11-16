import styled from "styled-components";
import {
  tabletWidth,
  contentsMaxWidth,
  lh_recomArtiTitle,
} from "src/variables";
export const ArticlesWraper = styled.div`
  margin: 19px 20px 0;
  display: grid;
  grid-template:
    "area area" 1fr
    "area area" 1fr
    "area area" 1fr
    /1fr 1fr;
  gap: 20px 15px;
  @media only screen and (min-width: ${tabletWidth}) {
    max-width: ${contentsMaxWidth};
    margin: 32px auto 0;
    display: grid;
    /* grid-template:
      "area area area" 1fr
      "area area area" 1fr
      /1fr 1fr 1fr; */
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 26px;
  }
`;
export const ArticleWraper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  @media only screen and (min-width: ${tabletWidth}) {
    display: flex;
    flex-direction: column;
  }
`;
export const ArticleContentdiv = styled.div`
  padding: 10px;
  @media only screen and (min-width: ${tabletWidth}) {
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
  @media only screen and (min-width: ${tabletWidth}) {
    font-size: 16px;
    line-height: ${lh_recomArtiTitle};
    letter-spacing: 0.05em;
    margin-bottom: auto;
  }
`;
