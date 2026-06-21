import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./LandingPage";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import OurMession from "./Pages/OurMession";
import Contacts from "./Pages/Contacts";
import DefaultLayout from "./components/DefaultLayout";
import Details from "./Pages/Details";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/our-mession" element={<OurMession />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          <Route path="/details/:title" element={<Details />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
