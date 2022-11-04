import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border: 1px solid #eeee;
  background-color: #f6f6f6;
  padding: 24px;
`;
export const Section = styled.section`
  margin-bottom: 40px;
  &:nth-child(4) {
    margin-bottom: 20px;
  }
`;

export const SectionTitleh2 = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;
export const SectionListul = styled.ul`
  list-style: none;
  margin-bottom: 0;
  margin-top: 16px;
`;
export const Listli = styled.li`
  font-size: 12px;
  margin-top: 12px;
  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const SnsListdiv = styled.div`
  display: flex;
  justify-content: left;
  column-gap: 16px;
`;
