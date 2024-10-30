import { FC } from "react";
import styled from "styled-components";

import MainTitleSection from "./MainTitleSection";
import VidoeSection from "./VidoeSection";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  background-color: #ebebeb;
  padding: 2rem;
  box-sizing: border-box;
`;

interface MainContentProps {}

const MainContent: FC<MainContentProps> = () => {
  return (
    <Container>
      <MainTitleSection />
      <VidoeSection />
    </Container>
  );
};

export default MainContent;
