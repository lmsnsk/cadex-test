import { FC } from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 50%;
`;

interface MainTitleSectionProps {}

const MainTitleSection: FC<MainTitleSectionProps> = () => {
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
