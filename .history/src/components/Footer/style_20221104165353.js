import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid #eeeeee;
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
  font-size: 15px;
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
  margin-bottom: 20px;
  display: flex;
  justify-content: left;
  column-gap: 16px;
`;
export const LowerAreadiv = styled.div`
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
`;
export const Linkul = styled.ul`
  list-style: none;
  margin: 0;
`;
export const Linkli = styled.li`
  font-size: 12px;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 20px;
  }
`;
export const CopyRightsmall = styled.small`
  opacity: 0.7;
  font-size: 12px;
`;
