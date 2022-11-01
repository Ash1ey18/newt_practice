import styled from "styled-components";

export const SectionWraper = styled.section`
  padding: 20px 0;
  width: 100%;
  > h2 {
    margin: 0;
  }
`;
export const ArticlesWraper = styled.div`
  width: 100%;
  margin: 20px;
`;
export const ArticleWraper = styled.div`
  width: 50%;
`;

export const ImageWraper = styled.div`
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

export const Title = styled.h2`
  background-color: red;
  margin: 0;
`;
