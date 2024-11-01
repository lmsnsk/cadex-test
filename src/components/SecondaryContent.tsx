import { FC, Fragment } from "react";
import styled from "styled-components";

import Card from "./Card";
import ContuctUsButton from "./ContuctUsButton";

import { cards } from "../hardcoding/cards";

import { flexCenter } from "../lib/helper";

const Container = styled.section`
  ${flexCenter}
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
`;

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 2rem;
`;

const SecondaryContent: FC = () => {
  return (
    <Container>
      <h2>Also very important title</h2>
      <CardBox>
        {cards.map((card) => (
          <Fragment key={card.id}>
            <Card title={card.title} text={card.text} />
          </Fragment>
        ))}
      </CardBox>
      <ContuctUsButton />
    </Container>
  );
};

export default SecondaryContent;
