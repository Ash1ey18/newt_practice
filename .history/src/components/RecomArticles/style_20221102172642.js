import styled from "styled-components";

export const SectionWraper = styled.section`
  padding: 20px 0;
  width: 100%;
  background-color: #f6f6f6;
  > h2 {
    font-size: 20px;
    margin: 0 10px;
  }
`;
export const ArticlesWraper = styled.div`
  margin: 18px;
  display: grid;
  grid-template:
    "area area" 1fr
    "area area" 1fr
    "area area" 1fr
    /1fr 1fr;
  gap: 20px 15px;
`;
export const ArticleWraper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 12px;
  margin: 0;
  & a:hover {
    opacity: 0.6;
  }
`;
