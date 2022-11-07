import styled from "styled-components";

export const LocationDiv = styled.div`
  height: 18px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 4px;
  grid-area: location;
  & a {
    color: #00cd67;
    &:hover {
      opacity: 0.6;
    }
  }
  @media only screen and (min-width: 640px) {
    font-size: ${(props) => (props.isTop ? "16px" : "14px")};
    margin-top: ${(props) => (props.isTop ? "2px" : undefined)};
    height: 24px;
    gap: 6px;
  }
`;
