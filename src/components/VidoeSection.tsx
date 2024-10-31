import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: clamp(320px, 500px, 90%);
`;

const VideoBox = styled.iframe`
  width: 100%;
  height: 100%;
  border: 1px solid #000000;
`;

const VidoeSection: FC = () => {
  return (
    <Container>
      Video here!
      <VideoBox></VideoBox>
    </Container>
  );
};

export default VidoeSection;
