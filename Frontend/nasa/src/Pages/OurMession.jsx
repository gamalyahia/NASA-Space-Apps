import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import bg from "../assets/mission.jpg";
import problem1 from "../assets/proplems/proplem1.jpg";
import problem2 from "../assets/proplems/problem2.jpg";
import problem4 from "../assets/proplems/problem4.jpg";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import map from "../assets/map.png";
import way from "../assets/way.png";

const data = [
  {
    img: icon1,
    content:
      "Create an interactive, detailed map that highlights the unique geographic challenges faced by our community.",
    title: "Visualize Community Challenges",
  },
  {
    img: icon2,
    content:
      "Use the map to offer targeted, actionable solutions for each challenge, including sustainable urban planning.",
    title: "Provide Practical Solutions",
  },
  {
    img: icon3,
    content:
      "Ensure the map is user-friendly and available to all—from residents to policymakers—enabling the entire community to explore real-time data.",
    title: "Empower Community Engagement",
  },
];

const OurMession = () => {
  return (
    <Stack
      id="our-mission"
      sx={{
        background: "rgb(2,7,13)",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        pb: 10,
        position: "relative",
        pt: 2,
      }}
    >
      <Stack
        sx={{
          width: "90vw",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ color: "white" }}>
          Our Mission
        </Typography>
        <Stack
          sx={{
            width: "240px",
            height: "5px",
            mt: 2,
            backgroundColor: "#6A9C89",
            mb: 5,
          }}
        />
        <Stack sx={{ flexDirection: "row" }}>
          <Stack
            sx={{
              flexDirection: "row",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            {data.map((item, i) => (
              <Stack
                key={i}
                sx={{
                  background: "rgba(255, 255, 255, 0.2)",
                  alignItems: "start",
                  color: "white",
                  p: 2,
                  gap: 2,
                  borderRadius: 3,
                  maxWidth: "350px",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Stack
                  sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}
                >
                  <Box
                    component={"img"}
                    src={item.img}
                    sx={{
                      maxWidth: "43px",
                      objectFit: "contain",
                      backgroundColor: "#86A400",
                      borderRadius: 2,
                      p: 0.5,
                    }}
                  />
                  <Typography variant="h4">{item.title}</Typography>
                </Stack>
                <Typography variant="h6">{item.content}</Typography>
              </Stack>
            ))}
          </Stack>
          <Stack
            sx={{
              p: 0.5,
              borderRadius: 5,
              backgroundColor: "#6A9C89",
              height: "fit-content",
            }}
          >
            <Box
              component={"img"}
              src={bg}
              sx={{ maxWidth: "690px", borderRadius: 5 }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurMession;
