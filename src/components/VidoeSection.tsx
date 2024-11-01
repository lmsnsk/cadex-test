import { FC } from "react";
import styled from "styled-components";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: clamp(320px, 500px, 90%);
`;

const VidoeSection: FC = () => {
  return (
    <Container>
      <LiteYouTubeEmbed id="dQw4w9WgXcQ" title="Video title" />
      <iframe
        width="100%"
        height="290px"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </Container>
  );
};

export default VidoeSection;
