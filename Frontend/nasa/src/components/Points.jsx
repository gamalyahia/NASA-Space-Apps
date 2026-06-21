import { Stack, Typography } from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
const Points = ({ path, isVisible, top, left, title, handelClick }) => {
  return (
    <Stack
      sx={{
        position: "absolute",
        top,
        left,
        alignItems: "center",
        transition: "0.2s ease-out",
        cursor: "pointer",
        "&:hover": {
          scale: "1.06",
        },
      }}
      onClick={() => handelClick(path)}
    >
      {!isVisible && (
        <>
          <PlaceIcon sx={{ color: "red", scale: "1.3" }} />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { lg: 27, xs: 18 },
              color: "aliceblue",
              textShadow: "3px 3px 2px black",
            }}
          >
            {title}
          </Typography>
        </>
      )}
    </Stack>
  );
};

export default Points;
