import React, { useEffect, useState } from "react";
import Transition from "../Framer_Motion/Transition.jsx";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  isMuiElement,
  PopoverRoot,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Map from "../assets/Map.webp";
import Map1 from "../assets/Map1.jpg";
import Map2 from "../assets/Map2.jpg";
import Map3 from "../assets/Map3.jpg";
import PlaceIcon from "@mui/icons-material/Place";
import song from "../assets/song.mp3";
import ZoomComponent from "../Framer_Motion/ZoomComponent.jsx";
import Points from "../components/Points.jsx";
import Navbar from "../components/Navbar.jsx";
const Landing = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [zoomX, setZoomX] = useState("");
  const [zoomY, setZoomY] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handelClick = (path) => {
    setIsVisible(true);
    navigate(path);
  };

  const handelZoomClick = (angleY, angleX) => {
    try {
      setZoomX(angleX);
      setZoomY(angleY);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Stack
      sx={{
        backgroundImage: `url(${Map3})`,
        width: {xs:"200vw" , lg:"100vw"},
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        justifyContent: "start",
        position: "relative",
        transform: isMobile ? "rotate(90deg)" : "", // Rotate only for mobile devices
      }}
    >
      {!isVisible && (
        <Stack sx={{ width: "100%", height: "100%" }}>
          <Navbar />
          <Points
            title={"Pollution"}
            left={"35%"}
            top={"24%"}
            isVisible={isVisible}
            path={`/details/Pollution`}
            handelClick={handelClick}
          />
          <Points
            title={"Water shortage"}
            left={"25%"}
            top={isMobile ? "80%" : "90%"}
            isVisible={isVisible}
            path={`/details/Water shortage`}
            handelClick={handelClick}
          />
          <Points
            title={"Coastal Erosion"}
            left={"36%"}
            top={"54%"}
            isVisible={isVisible}
            path={`/details/Coastal Erosion`}
            handelClick={handelClick}
          />
          <Points
            title={"Population Density"}
            left={"60%"}
            top={"50%"}
            isVisible={isVisible}
            path={`/details/Population Density`}
            handelClick={handelClick}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default ZoomComponent(Landing);
