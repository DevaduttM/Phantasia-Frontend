"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor: "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.58,
  fontWeight: 500,
  letterSpacing: 0.2,
  color: "rgba(0,0,0,1)",
});

export default function MusicPlayerSlider() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const duration = audioRef.current?.duration || 0;
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(true);
  const title = audioRef.current?.getAttribute("name") || "Unknown title";


  function formatDuration(value: number) {
    const roundedValue = Math.floor(value);
    const minute = Math.floor(roundedValue / 60);
    const secondLeft = roundedValue % 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setPosition(audio.currentTime);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const fastPlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.playbackRate = Math.min(2, audio.playbackRate + 0.5);
  }
  const slowPlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.playbackRate = Math.max(0.5, audio.playbackRate - 0.5);
  }

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (paused) {
      audio.play();
    } else {
      audio.pause();
    }
    setPaused(!paused);
  };

  const handleSliderChange = (_: any, value: number | number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newValue = value as number;
    audio.currentTime = newValue;
    setPosition(newValue);
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden", position: "relative", p: 3 }}>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      <Widget>
        <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "rgba(0,0,0,0.08)", borderRadius: 8, p: 1.5 }}>
          <CoverImage>
            <img
              alt="can't win - Chilling Sunday"
              src="https://i.imgur.com/S5qNPdj.png"
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography variant="caption" sx={{ color: "#000", fontWeight: 500 }}>
              Walter White
            </Typography>
            <Typography noWrap>
              <b className="text-black">Scene 1</b>
            </Typography>
            <Typography noWrap sx={{ letterSpacing: -0.25, color: "#000" }}>
              Breaking Bad
            </Typography>
          </Box>
        </Box>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={handleSliderChange}
          sx={{
            color: "rgba(0,0,0,0.87)",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&::before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
            "& svg": {
              color: "#000",
            },
          }}
        >
          <IconButton onClick={slowPlayback} aria-label="previous song">
            <FastRewindRounded fontSize="large" />
          </IconButton>
          <IconButton aria-label={paused ? "play" : "pause"} onClick={togglePlayPause}>
            {paused ? (
              <PlayArrowRounded sx={{ fontSize: "3rem" }} />
            ) : (
              <PauseRounded sx={{ fontSize: "3rem" }} />
            )}
          </IconButton>
          <IconButton onClick={fastPlayback} aria-label="next song">
            <FastForwardRounded fontSize="large" />
          </IconButton>
        </Box>
      </Widget>
    </Box>
  );
}
