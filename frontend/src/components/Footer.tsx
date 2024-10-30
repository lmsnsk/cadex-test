import { FC } from "react";
import styled from "styled-components";
import CompanyName from "./CompanyName";

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 1rem;
  box-sizing: border-box;
`;

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <Container>
      <CompanyName />
    </Container>
  );
};

export default Footer;
