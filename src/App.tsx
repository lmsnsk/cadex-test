import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const Content = styled.div`
  max-width: 1280px;
  padding: 1rem;
  box-sizing: border-box;
  margin: 0 auto;
`;

const App: FC = () => {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Content>
      <Footer />
    </>
  );
};

export default App;
