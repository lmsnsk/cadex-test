import { FC } from "react";
import styled from "styled-components";

import ContuctUsButton from "./ContuctUsButton";
import CompanyName from "./CompanyName";

const Container = styled.header`
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1rem;
  box-sizing: border-box;
`;

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <Container>
      <CompanyName />
      <ContuctUsButton />
    </Container>
  );
};

export default Header;
