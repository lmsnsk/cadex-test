import { FC } from "react";
import styled from "styled-components";

import ContuctUsButton from "./ContuctUsButton";

import { flexCenter } from "../lib/helper";

const Container = styled.section`
  ${flexCenter}
  flex-direction: column;
  gap: 3rem;
  margin: 2rem 0;
  margin-bottom: 6rem;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  background-color: #ffffff;
`;

const LessImportantContent: FC = () => {
  return (
    <Container>
      <h3>Less important title</h3>
      <ContuctUsButton />
    </Container>
  );
};

export default LessImportantContent;
