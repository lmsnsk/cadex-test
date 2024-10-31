import { FC } from "react";
import styled from "styled-components";

import CompanyName from "./CompanyName";

import { flexCenter } from "../lib/helper";

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  ${flexCenter}
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #fafafa;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const Footer: FC = () => {
  return (
    <Container>
      <CompanyName />
    </Container>
  );
};

export default Footer;
