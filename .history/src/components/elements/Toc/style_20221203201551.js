import { tabletWidth } from "src/variables";
import styled from "styled-components";

export const TocSection = styled.section`
  padding: 20px;
  margin-bottom: 32px;
  background-color: #fafafa;
  border-radius: 8px;
  color: #1f1f1f;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 12px;
  border-bottom: 1px solid #cbcbcb;
  @media only screen and (min-width: ${tabletWidth}) {
    border-bottom: none;
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
  }
`;

export const ListTilte = styled.h3`
  position: relative;
  line-height: 24px;
  font-weight: 600;
  font-size: 15px;
  margin: 0;
  letter-spacing: 0.05em;
  padding-left: 32px;
  &::before {
    content: "1";
    position: absolute;
    top: 11px;
    left: 0;
    font-size: 12px;
    display: flex;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: 1px solid #1f1f1f;
    border-radius: 20px;
  }
  @media only screen and (min-width: ${tabletWidth}) {
    line-height: 28px;
    &::before {
      top: 0;
      /* width: 28px;
      height: 28px; */
    }
  }
`;

export const TocContents = styled.ul`
  margin: 12px 0 0;
`;

export const ListItem = styled.li`
  margin-top: 12px;
  font-size: 15px;
  list-style: none;
  letter-spacing: 0.08em;
  line-height: 28px;
`;
export const TocBtn = styled.button`
  display: block;
  width: 240px;
  height: 40px;
  margin: 20px auto 0;
  border: 1px solid #1f1f1f;
  border-radius: 20px;
  background-color: #fafafa;
  font-size: 14px;
  font-weight: 700;
`;
