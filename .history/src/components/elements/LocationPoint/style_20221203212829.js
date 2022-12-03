import { marginTop, tabletWidth } from "src/variables";
import { lh_md } from "src/variables";
import styled from "styled-components";
export const LocationDiv = styled.div`
  font-size: ${(props) => (props.isTop ? "14px" : "12px")};
  font-weight: ${(props) => (props.isTop ? "600" : "500")};
  letter-spacing: 0.05em;
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 4px;
  & a {
    color: #00cd67;
    &:hover {
      opacity: 0.6;
    }
  }
  @media only screen and (min-width: ${tabletWidth}) {
    width: 100%;
    font-size: ${(props) => (props.isTop ? "16px" : "14px")};
    margin-top: ${(props) => (props.isTop ? undefined : marginTop)};
    line-height: ${lh_md};
  }
`;

export const AreaDiv = styled.div`
  display: flex;
`;
