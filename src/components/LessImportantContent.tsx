import { FC } from "react";
import styled from "styled-components";

import ContuctUsButton from "./ContuctUsButton";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0;
  margin-bottom: 6rem;
  /* background-color: #f7f7f7; */
  padding: 2rem;
  box-sizing: border-box;
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
