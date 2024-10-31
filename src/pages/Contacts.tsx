import { FC } from "react";
import styled from "styled-components";

import FormComponent from "../components/FormComponent";
import { opacity } from "../lib/helper";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  margin: 2rem 0;
  box-sizing: border-box;
  animation: ${opacity} 0.4s linear;
`;

const Contacts: FC = () => {
  return (
    <Container>
      <FormComponent />
    </Container>
  );
};

export default Contacts;
