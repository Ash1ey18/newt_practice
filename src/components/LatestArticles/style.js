import { tabletWidth } from "src/variables";
import styled from "styled-components";

export const BtnDiv = styled.div`
  height: 48px;
  border: 1px solid #1f1f1f;
  border-radius: 30px;
  margin: 30px auto 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.03em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.6;
  }
  @media only screen and (min-width: ${tabletWidth}) {
    width: 420px;
  }
`;
