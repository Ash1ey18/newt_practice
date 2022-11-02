import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 0;
  width: 100%;
  background-color: ${(props) => (0 ? "#FAFAFA" : "red")};

  > h2 {
    font-size: 20px;
    margin: 0 10px;
  }
`;