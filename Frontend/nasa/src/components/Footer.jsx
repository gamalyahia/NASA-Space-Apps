import { Divider, Stack, Box, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import location from "../assets/flagpos.png";
import email from "../assets/email.png";
import phone from "../assets/phone-call.png";
import Social from "./Social";
import facbookImg from "../assets/facebook.png";
import ingramsImg from "../assets/instagram.png";

const Footer = () => {
  return (
    <Stack
      sx={{ width: "100vw", alignItems: "center", background: "rgb(2,7,13)" }}
    >
      <Divider
        sx={{
          width: "90vw",
          borderRadius: "100px",
          borderWidth: "1.5px",
          borderColor: "#6A9C89",
        }}
      />
      <Stack
        sx={{
          width: "90vw",
          justifyContent: "space-between",
          flexDirection: "row",
          py: 3,
          alignItems: "start",
        }}
      >
        <Stack sx={{ flex: 1 }}>
          <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
            <Box
              component={"img"}
              src={logo}
              sx={{ width: "64px", objectFit: "cover" }}
            />
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              EnvMap
            </Typography>
          </Stack>
          <Typography
            variant="h5"
            sx={{ color: "white", ml: 2, maxWidth: "390px", fontWeight: "400" }}
          >
            EnvMap is an interactive, detailed map that highlights the unique
            geographic challenges faced by our community.
          </Typography>
          <Stack
            sx={{
              gap: 1,
              mt: 2,
              ml: 2,
              flexDirection: "row",
            }}
          >
            <Social
              img={facbookImg}
              title={""}
              color={"facebook"}
              to={"https://www.facebook.com/spaceappscairo"}
            />
            <Social
              img={ingramsImg}
              title={""}
              color={"insta"}
              to={
                "https://www.instagram.com/nasaspaceappscairo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
            />
          </Stack>
        </Stack>
        <Stack sx={{ flex: 1, gap: 2 }}>
          <Typography variant="h3" sx={{ color: "white", mt: 1.6, mb: 1 }}>
            Contact US
          </Typography>
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
            <Box component={"img"} src={location} />
            <Typography
              variant="h5"
              sx={{
                color: "white",
                "&:hover": { color: "#6A9C89" },
                transition: "all 0.6s",
                cursor: "pointer",
              }}
            >
              13-Nasr-City-Cairo-Egypt
            </Typography>
          </Stack>
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
            <Box component={"img"} src={email} />
            <Typography
              variant="h5"
              sx={{
                color: "white",
                "&:hover": { color: "#6A9C89" },
                transition: "all 0.6s",
                cursor: "pointer",
              }}
            >
              Env-Map@gmail.com
            </Typography>
          </Stack>
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
            <Box component={"img"} src={phone} />
            <Typography
              variant="h5"
              sx={{
                color: "white",
                "&:hover": { color: "#6A9C89" },
                transition: "all 0.6s",
                cursor: "pointer",
              }}
            >
              +201005497891
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                "&:hover": { color: "#6A9C89" },
                transition: "all 0.6s",
                cursor: "pointer",
              }}
            >
              ,
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                "&:hover": { color: "#6A9C89" },
                transition: "all 0.6s",
                cursor: "pointer",
              }}
            >
              +201005497891
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ flex: 1, gap: 2 }}>
          <Typography variant="h3" sx={{ color: "white", mt: 1.6 }}>
            Resourses
          </Typography>
          <Typography sx={{ color: "white" }}>
            <a
              href="https://sedac.ciesin.columbia.edu/data/set/lecz-urban-rural-population-land-area-estimates-v3"
              style={{ color: "blue" }}
            >
              https://sedac.ciesin.columbia.edu/data/set/lecz-urban-rural-population-land-area-estimates-v3
            </a>
          </Typography>
          <Typography sx={{ color: "white" }}>
            Nicholls, R. J., & Cazenave, A. (2010). Sea-level rise. Science,
            328(5985), 1517-1520.{" "}
            <a
              href="https://doi.org/10.1126/science.1185771"
              style={{ color: "blue" }}
            >
              https://doi.org/10.1126/science.1185771
            </a>
          </Typography>
          <Typography sx={{ color: "white" }}>
            Graham, J. (2017). Urban transport and the environment. Transport
            Reviews, 37(1), 1-12.{" "}
            <a
              href="https://doi.org/10.1080/01441647.2017.1291950"
              style={{ color: "blue" }}
            >
              https://doi.org/10.1080/01441647.2017.1291950
            </a>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
