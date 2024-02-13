import { Box } from "@mui/material";
import { forwardRef } from "react";

const VideoPlayer = forwardRef<HTMLVideoElement, IVideoPlayer>(function Video(
  { poster, src, autoplay, loop },
  ref
) {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <video
        poster={poster}
        ref={ref}
        autoPlay={autoplay}
        muted={autoplay}
        loop={loop}
        style={{
          width: "100%",
          border: "none",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </Box>
  );
});

export default VideoPlayer;
