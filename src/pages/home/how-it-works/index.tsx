import { Box, Container, SxProps, Typography } from "@mui/material";
import { VideoPlayer } from "../../../components";
import PlayIcon from "../../../assets/Play Button.png";
import PauseIcon from "../../../assets/Pause-Button.png";
import Poster from "../../../assets/video-poster.png";
import Video from "../../../assets/videos/how-it-works.mp4";
import { useRef, useState } from "react";
import Reviews from "./reviews";

const videoBox: SxProps = {
  position: "relative",
  height: { xs: "100%", md: "500px" },
  borderRadius: "10px",
  overflow: "hidden",
  aspectRatio: "16:9",
  cursor:'pointer'
};
const imgBox: SxProps = {
  position: "absolute",
  top: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "opacity 0.6s",
};

const HowItWorks = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const posterUrl = Poster;

  const [isPlaying, setIsPlying] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const toggleVideo = () => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlying(!isPlaying);
  };
  return (
    <Container maxWidth="lg" >
      <Box my={10} id='how-it-works'>
        <Typography textAlign={"center"} variant="h2" mb={5}>
          How it works?
        </Typography>
        <Box
          sx={videoBox}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <VideoPlayer src={Video} poster={posterUrl} ref={videoRef} loop />
          <Box
            sx={{
              ...imgBox,
              opacity: isHovered || !isPlaying ? 1 : 0,
            }}
            onClick={toggleVideo}
          >
            <Box>
              <img
                src={isPlaying ? PauseIcon : PlayIcon}
                alt="Video Control"
                style={{
                  width: "80px",
                  height: "80px",
                  display: isHovered || !isPlaying ? "block" : "none",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box my={4}>
        <Reviews />
      </Box>
    </Container>
  );
};

export default HowItWorks;
