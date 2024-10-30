import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Divider } from "antd";

import MainPage from "./pages/MainPage";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const App: FC = () => {
  return (
    <>
      <Header />
      {/* <Divider /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

