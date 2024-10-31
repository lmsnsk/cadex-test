import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ContuctUsButton from "./ContuctUsButton";
import CompanyName from "./CompanyName";

const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #fafafa;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Header: FC = () => {
  return (
    <Container>
      <LinkContainer to="/">
        <CompanyName />
      </LinkContainer>
      <ContuctUsButton />
    </Container>
  );
};

export default Header;
