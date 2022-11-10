import styled from "styled-components";
import { TabletWidth } from "src/variables";

export const Styledaside = styled.aside`
  border-top: 1px solid #eeee;
  padding: 24px;
  text-align: center;
  @media only screen and (min-width: ${TabletWidth}) {
    display: grid;
    grid-template:
      "title iconList"
      "description iconList";

    align-items: center;
    text-align: left;
    padding: 33px 0;
  }
`;
export const Styledh1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.3em;
  line-height: 32px;
  margin: 0;
  @media only screen and (min-width: ${TabletWidth}) {
    grid-area: iconList;
  }
`;
export const Styledp = styled.p`
  font-size: 14px;
  white-space: pre-wrap;
  margin: 16px 0 0 0;
  letter-spacing: 1.5px;
  line-height: 28px;
  @media only screen and (min-width: ${TabletWidth}) {
    grid-area: description;
  }
`;

export const SnsListul = styled.ul`
  list-style: none;
  height: 40px;
  margin: 16px 0 0;
  display: flex;
  justify-content: center;
  gap: 24px;
  & a:hover {
    opacity: 0.6;
  }
  @media only screen and (min-width: ${TabletWidth}) {
    margin: 0;
    height: 48px;
    grid-area: iconList;
    gap: 32px;
  }
`;
