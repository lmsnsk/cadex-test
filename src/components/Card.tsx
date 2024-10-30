import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  height: 250px;
  /* border: 1px solid #000000; */
`;

interface CardProps {
  title: string;
  text: string;
}

const Card: FC<CardProps> = ({ text, title }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <div>
        <p>{text}</p>
      </div>
    </Container>
  );
};

export default Card;
