import styled from "styled-components";
import { tabletWidth } from "src/variables";

export const StyledTime = styled.time`
  width: 100%;
  font-size: 12px;
  opacity: 0.7;
  margin-top: 2px;
  @media only screen and (min-width: ${tabletWidth}) {
    line-height: ${lh_md};
    letter-spacing: 0.05em;
  }
`;
