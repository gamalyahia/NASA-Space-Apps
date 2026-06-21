import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import Transition from "../Framer_Motion/Transition";
import omar from "../assets/3mk 3omar.jpeg";
import body from "../assets/body.jpeg";
import hussiuen from "../assets/hussiuen.jpeg";
import gamal from "../assets/gamal.jpeg";
import mohammed from "../assets/mohammed.jpeg";

const AboutUs = () => {
  const data = [
    {
      img: body,
      name: "Abdullah Mohammed ",
      specialist: "Full Stack Developer",
    },
    {
      img: mohammed,
      name: "Mohammed Islam ",
      specialist: "Mern Stack Developer",
    },
    {
      img: hussiuen,
      name: "Hussien Mohammed ",
      specialist: "UI & UX Designer",
    },
    {
      img: omar,
      name: "Omar Youssef ",
      specialist: "React Developer",
    },
    {
      img: gamal,
      name: "Gamal Yahia ",
      specialist: "Full Stack Developer",
    },
  ];
  return (
    <Stack
      id="our-team"
      sx={{
        background: "rgb(2,7,13)",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <Divider
        sx={{
          width: "90vw",
          borderRadius: "100px",
          borderWidth: "1.5px",
          borderColor: "#6A9C89",
        }}
      />

      <Stack sx={{ width: "90vw", mt: 5, alignItems: "center" }}>
        <Typography variant="h1" sx={{ color: "white" }}>
          Our Team
        </Typography>

        <Stack
          sx={{
            width: "180px",
            height: "5px",
            backgroundColor: "#6A9C89",
            borderRadius: "20px",
            mt: 2,
            mb: 4,
          }}
        />

        <Stack
          sx={{
            flexDirection: "row",
            gap: 15,
            justifyContent: "center",
            width: "100vw",
            mb: 10,
          }}
        >
          <Grid2 container spacing={6}>
            {data?.map((person) => (
              <Grid2
                lg={2.4}
                md={4}
                sm={12}
                sx={{
                  gap: 0.2,
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component={"img"}
                  src={person.img}
                  sx={{
                    maxHeight: "200px",
                    width: "200px",
                    borderRadius: "50%",
                    alignSelf: "center",
                    objectFit: "cover",
                    objectPosition: "start",
                    mb:2
                  }}
                />
                <Typography variant="h4">{person.name}</Typography>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", color: "grey" }}
                >
                  {person.specialist}
                </Typography>
              </Grid2>
            ))}
          </Grid2>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
