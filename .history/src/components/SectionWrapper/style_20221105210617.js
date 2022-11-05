import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 0;
  width: 100%;
  background-color: ${(props) =>
    props.type === "recomArti" ? "#FAFAFA" : undefined};

  > h2 {
    font-size: 20px;
    margin: 0 20px;
    @media only screen and (min-width: 640px) {
      text-align: center;
    }
  }
`;
