import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid #eeeeee;
  background-color: #f6f6f6;
  padding: 0 24px;
`;

export const Nav = styled.nav`
  padding: 32px 0 40px;
`;

export const Section = styled.section`
  margin-bottom: 40px;
  &:nth-child(4) {
    margin: 0;
  }
`;

export const SectionTitleh2 = styled.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
`;
export const SectionListul = styled.ul`
  list-style: none;
  margin-bottom: 0;
  margin-top: 16px;
`;
export const Listli = styled.li`
  font-size: 12px;
  margin-top: 12px;
  &:hover {
    opacity: 0.6;
  }
  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const SnsListdiv = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: left;
  column-gap: 16px;
  > div {
    &:hover {
      opacity: 0.6;
    }
  }
`;
export const LowerAreadiv = styled.div`
  opacity: 0.7;
  padding: 32px 0 40px;
  border-top: 1px solid #e0e0e0;
`;
export const Linkul = styled.ul`
  list-style: none;
  margin: 0;
`;
export const Linkli = styled.li`
  font-size: 12px;
  margin-bottom: 12px;
  &:hover {
    opacity: 0.6;
  }
  &:last-child {
    margin-bottom: 20px;
  }
`;
export const CopyRightsmall = styled.small`
  font-size: 12px;
`;
