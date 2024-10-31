import { FC } from "react";
import styled from "styled-components";

import MainTitleSection from "./MainTitleSection";
import VidoeSection from "./VidoeSection";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  /* background-color: #f7f7f7; */
  padding: 2rem;
  box-sizing: border-box;
  margin: 1rem 0;
`;

const MainContent: FC = () => {
  return (
    <Container>
      <MainTitleSection />
      <VidoeSection />
    </Container>
  );
};

export default MainContent;
