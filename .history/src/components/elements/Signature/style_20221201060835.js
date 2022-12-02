import { lh_md } from "src/variables";
import styled from "styled-components";

export const Author = styled.div`
  font-size: 14px;
  line-height: ${lh_md};
  font-weight: 600;
`;
export const Signature = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template:
    "areaA areaB" 24px
    "areaA areaC" 24px
    / 32px 1fr;
  column-gap: 16px;
  align-items: center;
  > span:nth-child(1) {
    grid-area: areaA;
  }
  @media only screen and (min-width: ${tabletWidth}) {
    margin-top: 16px;
  }
`;
