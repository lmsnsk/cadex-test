import { FC } from "react";
import styled from "styled-components";

import { Divider } from "antd";

import MainContent from "../components/MainContent";
import SecondaryContent from "../components/SecondaryContent";
import LessImportantContent from "../components/LessImportantContent";

import { opacity } from "../lib/helper";

const Container = styled.main`
  animation: ${opacity} 0.4s linear;
`;

const MainPage: FC = () => {
  return (
    <Container>
      <MainContent />
      <Divider />
      <SecondaryContent />
      <Divider />
      <LessImportantContent />
    </Container>
  );
};

export default MainPage;
