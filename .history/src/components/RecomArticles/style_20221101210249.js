import styled from "styled-components";

export const SectionWraper = styled.section`
  padding: 20px 0;
  width: 100%;
  background-color: #f6f6f6;
  > h2 {
    margin: 0 10px;
  }
`;
export const ArticlesWraper = styled.div`
  margin: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 14px;
`;
export const ArticleWraper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
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
  font-size: 12px;
  margin: 0;
`;
