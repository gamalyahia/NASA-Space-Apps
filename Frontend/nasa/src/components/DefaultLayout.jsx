import { Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <Stack>
      <Navbar />
      <Outlet />
    </Stack>
  );
};

export default DefaultLayout;
