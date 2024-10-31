import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 250px;
  max-width: 330px;
`;

interface CardProps {
  title: string;
  text: string;
}

const Card: FC<CardProps> = ({ text, title }) => {
  return (
    <Container>
      <h4>{title}</h4>
      <div>
        <p>{text}</p>
      </div>
    </Container>
  );
};

export default Card;
