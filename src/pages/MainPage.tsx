import { FC } from "react";

import MainContent from "../components/MainContent";
import SecondaryContent from "../components/SecondaryContent";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  return (
    <main>
      <MainContent />
      <SecondaryContent />
    </main>
  );
};

export default MainPage;
