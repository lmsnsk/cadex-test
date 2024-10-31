import { FC, useState } from "react";
import styled from "styled-components";

import FormComponent from "../components/FormComponent";

import { flexCenter, opacity } from "../lib/helper";

const Container = styled.main`
  ${flexCenter}
  min-height: 50vh;
  margin: 2rem 0;
  box-sizing: border-box;
  animation: ${opacity} 0.4s linear;
  width: 100%;
`;

const Message = styled.p`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  animation: ${opacity} 1s linear;
`;

const Contacts: FC = () => {
  const [incomingMessage, setIncomingMessage] = useState("");

  return (
    <Container>
      {incomingMessage ? (
        <Message>{incomingMessage}</Message>
      ) : (
        <FormComponent setIncomingMessage={setIncomingMessage} />
      )}
    </Container>
  );
};

export default Contacts;
