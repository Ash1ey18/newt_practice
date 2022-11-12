import styled from "styled-components";
import { tabletWidth } from "src/variables";

export const FooterWrapper = styled.footer`
  border-top: 1px solid #eeeeee;
  background-color: #f6f6f6;
  padding: 0 24px;
  @media only screen and (min-width: ${tabletWidth}) {
    padding: 0;
  }
`;

export const Nav = styled.nav`
  padding: 32px 0 40px;
  @media only screen and (min-width: ${tabletWidth}) {
    padding: 39px 0 36px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Section = styled.section`
  margin-bottom: 40px;
  &:last-child {
    margin: 0;
  }
  @media only screen and (min-width: ${tabletWidth}) {
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
  & a:hover {
    opacity: 0.6;
  }

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const SnsListul = styled.ul`
  list-style: none;
  margin-top: 16px;
  height: 40px;
  display: flex;
  justify-content: left;
  column-gap: 16px;

  & a:hover {
    opacity: 0.6;
  }
  @media only screen and (min-width: ${tabletWidth}) {
    height: 24px;
  }
`;

export const LowerAreadiv = styled.div`
  padding: 32px 0 40px;
  border-top: 1px solid #e0e0e0;
`;
export const Linkul = styled.ul`
  list-style: none;
  line-height: 20px;
  margin: 0;
`;
export const Linkli = styled.li`
  font-size: 12px;
  color: #1f1f1f;
  margin-bottom: 12px;
  &:hover {
    opacity: 0.6;
  }
  &:last-child {
    margin-bottom: 20px;
  }
`;
export const CopyRightsmall = styled.p`
  width: 100%;
  margin-top: 34px;
  margin-bottom: 0;
  font-size: 12px;
`;
