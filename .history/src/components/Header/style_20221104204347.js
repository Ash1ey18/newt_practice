import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  @media only screen and (min-width: 600px) {
    padding-left: 48px;
    padding-right: 56px;
    justify-content: space-between;
  }
`;
