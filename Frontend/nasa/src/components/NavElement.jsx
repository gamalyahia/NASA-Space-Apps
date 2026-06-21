import { Typography } from "@mui/material";
import React from "react";

const NavElement = ({ content, url = "/" }) => {
  return (
    <a href={`/#${url}`}>
      <Typography
        sx={{
          position: "relative",
          fontWeight: "500",
          "&:hover": {
            color: "blue.main",
            "&:before": {
              animation: "bottom-nav-element 0.4s",
              content: '""',
              position: "absolute",
              borderRadius: 50,
              top: 30,
              width: "90%",
              height: "3px",
              background: "#fff",
              transition: "all 0.6s",
            },
            cursor: "pointer",
          },
        }}
        variant="subtitle1"
      >
        {content}
      </Typography>
    </a>
  );
};

export default NavElement;
