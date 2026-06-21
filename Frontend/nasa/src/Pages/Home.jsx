import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import bg from "../assets/bg2.jpg";
import Transition from "../Framer_Motion/Transition";
import { useLocation, useNavigate } from "react-router-dom";
import OurMession from "./OurMession";
import AboutUs from "./AboutUs";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisable, setisVisable] = useState(true);

  useEffect(() => {
    console.log(location);
    location.pathname !== "/" && setisVisable(false); // Update isVisable when pathname is not "/"
  }, [location]);

  const handleClick = () => {
    navigate("/landing"); // Navigate to "/landing"
    setisVisable(false); // Hide the home section after navigation
  };

  return (
    <>
      <Stack>
        <Stack
          id="home"
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          {isVisable && (
            <Stack sx={{ alignItems: "center" }}>
              <Typography
                sx={{
                  position: "relative",
                  textAlign: "center",
                  fontSize: { md: "8vw", xs: "10vw" },
                  fontWeight: "900",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  WebkitTextStroke: { md: "3px #ffffff", xs: "1px #ffffff" },
                }}
              >
                env
                <span style={{ color: "transparent", mixBlendMode: "overlay" }}>
                  iron
                </span>
                ment
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  width: "fit-content",
                  border: "1.5px solid white",
                  color: "white",
                  scale: { lg: "1.7", md: "1.5", xs: "1.3" },
                  mt: 2,
                  transition: "all 0.6s",
                  "&:hover": {
                    backgroundColor: "#ffffff40",
                  },
                }}
                onClick={handleClick} // Bind the click event to navigate and set visibility
              >
                Explore The Map !
              </Button>
            </Stack>
          )}
        </Stack>
        <OurMession />
        <AboutUs />
        <Footer />
      </Stack>
    </>
  );
};

export default Transition(Home);
