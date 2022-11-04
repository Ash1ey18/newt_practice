import styled from "styled-components";
export const Location = styled.div`
  height: 18px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 2px;
  grid-area: location;
  & a {
    color: #00cd67;
    &:hover {
      opacity: 0.6;
    }
  }
`;
