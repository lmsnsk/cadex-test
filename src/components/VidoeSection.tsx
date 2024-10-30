import { FC } from "react";
import styled from "styled-components";

const Container = styled.section`
  position: relative;
  width: 50%;
`;

const VideoBox = styled.iframe`
  width: 100%;
  height: 100%;
  border: 1px solid #000000;
`;

interface VidoeSectionProps {}

const VidoeSection: FC<VidoeSectionProps> = () => {
  return (
    <Container>
      Video here!
      <VideoBox></VideoBox>
    </Container>
  );
};

export default VidoeSection;
