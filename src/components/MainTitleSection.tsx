import { FC } from "react";

import styled from "styled-components";

const Container = styled.div`
  width: clamp(320px, 500px, 100%);
  margin: 0 auto;
`;

const MainTitleSection: FC = () => {
  return (
    <Container>
      <h1>Most important title on the page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum
        ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
      </p>
    </Container>
  );
};

export default MainTitleSection;
