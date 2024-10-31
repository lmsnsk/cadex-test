import { FC } from "react";

import { Divider } from "antd";

import MainContent from "../components/MainContent";
import SecondaryContent from "../components/SecondaryContent";
import LessImportantContent from "../components/LessImportantContent";

const MainPage: FC = () => {
  return (
    <main>
      <MainContent />
      <Divider />
      <SecondaryContent />
      <Divider />
      <LessImportantContent />
    </main>
  );
};

export default MainPage;
