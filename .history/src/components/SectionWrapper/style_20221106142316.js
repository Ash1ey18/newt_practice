import styled from "styled-components";

export const Section = styled.section`
  padding: 24px 0 32px;
  width: 100%;
  letter-spacing: 0.05em;
  background-color: ${(props) =>
    props.type === "recomArti" ? "#FAFAFA" : undefined};

  > h2 {
    font-size: 20px;
    margin: 0 20px;
    @media only screen and (min-width: 640px) {
      text-align: center;
      font-size: 28px;
      margin-bottom: 30px;
      padding: 32px 0 64px;
    }
  }
`;
