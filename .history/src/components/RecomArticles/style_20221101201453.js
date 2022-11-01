import styled from "styled-components";

export const RecomArticle = styled.section`
  width: 100%;
`;
export const ArticleWraper = styled.div`
  padding: 20px 0;
  width: 100%;
  > h2 {
    margin: 0;
  }
`;

export const ArticleImageWraper = styled.div`
  position: relative;
  > span {
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: unset !important;
  }
`;
