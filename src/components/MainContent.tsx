import { FC } from "react";
import styled from "styled-components";

import MainTitleSection from "./MainTitleSection";
import VidoeSection from "./VidoeSection";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  box-sizing: border-box;
  margin: 1rem 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  background-color: #ffffff;
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
