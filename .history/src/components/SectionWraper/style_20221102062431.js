import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 0;
  width: 100%;
  background-color: ${(props) => {
    console.log(props);
    props.recomArti == null ? "blue" : "red";
  }};

  > h2 {
    font-size: 20px;
    margin: 0 10px;
  }
`;
