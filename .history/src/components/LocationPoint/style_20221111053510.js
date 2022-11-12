import styled from "styled-components";
import { tabletWidth } from "src/variables";
export const LocationDiv = styled.div`
  height: 18px;
  font-size: 14px;
  font-weight: ${(props) => (props.isTop ? "600" : "500")};
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  grid-area: location;
  & a {
    color: #00cd67;
    &:hover {
      opacity: 0.6;
    }
  }
  @media only screen and (min-width: ${tabletWidth}) {
    width: 100%;
    font-size: ${(props) => (props.isTop ? "16px" : "14px")};
    margin-top: ${(props) => (props.isTop ? undefined : "2px")};
    height: 24px;
    gap: 6px;
  }
`;
