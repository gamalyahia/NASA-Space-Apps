import { Stack, Typography } from "@mui/material";
import React from "react";

const Social = ({ img, title, color, to }) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "aliceblue",
        borderRadius: "10px",
        cursor: "pointer",
        p: 1,
        width: "fit-content",
        background:
          color === "facebook" ? "rgb(80,125,210)" : "rgb(224,53,118)",
        background:
          color === "facebook"
            ? "linear-gradient(90deg, rgba(80,125,210,1) 0%, rgba(30,75,160,1) 100%)"
            : "linear-gradient(162deg, rgba(224,53,118,1) 0%, rgba(75,97,213,1) 100%)",
      }}
    >
      <a
        style={{
          fontFamily: "Space Grotesk",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
        href={to}
      >
        <img src={img} style={{ width: "24px" }} />
      </a>
    </Stack>
  );
};

export default Social;
