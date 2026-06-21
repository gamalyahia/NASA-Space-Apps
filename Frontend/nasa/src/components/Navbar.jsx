import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import NavElement from "./NavElement";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        flexDirection: { md: "row", xs: "column" },
        justifyContent: {lg:"space-between" , xs:"center"},
        alignItems: {lg:"center"},
        py: 1,
        gap: 2,
        position: "absolute",
        width: "92.4vw",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        px: 10,
        zIndex: 10,
      }}
    >
      <Stack
        sx={{ flexDirection: "row", alignItems: "center", cursor: "pointer",
          ml:{xs:4}
         }}
        onCLick={() => navigate("/")}
      >
        <Box
          component={"img"}
          src={logo}
          sx={{ width: "64px", objectFit: "cover" }}
        />
        <Typography variant="h2" sx={{ fontWeight: "bold", color: "white" }}>
          EnvMap
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          gap: { md: 4, xs: 2 },
          "& >*": {
            color: "white",
            textDecoration: "none",
          },
        }}
      >
        <NavElement content={"Home"} url="home" />
        <NavElement content={"Our Mession"} url="our-mission" />
        <NavElement content={"Our Team"} url="our-team" />
      </Stack>
      {/* <Button
        variant="outlined"
        sx={{
          borderRadius: "20px",
          border: "1.5px solid white",
          color: "white",
          transition: "all 0.6s",
          "&:hover": {
            backgroundColor: "#ffffff40",
          },
        }}
        onClick={() => navigate("/landing")}
      >
        Explore The Map!
      </Button> */}
    </Stack>
  );
};

export default Navbar;
