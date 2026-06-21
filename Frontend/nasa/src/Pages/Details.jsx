import {
  Box,
  Button,
  keyframes,
  Stack,
  TextField,
  Typography,
  useTheme,
  useThemeProps,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { useGetProblemsData } from "../Data.js";
import { useNavigate, useParams } from "react-router-dom";
import bg from "../assets/bg2.jpg";
import Transition from "../Framer_Motion/Transition.jsx";
import Navbar from "../components/Navbar.jsx";
import { theme } from "../Theme.js";
import Comment from "../components/Comment.jsx";
import axios from "axios";
const Details = () => {
  const ref = useRef();
  const { title } = useParams();
  const [inputValue, setInputValue] = useState("");
  const data1 = useGetProblemsData();
  const [objData, setObjData] = useState({});
  const [comments, setComments] = useState([]);
  const theme = useTheme();
  const isMobile = theme.breakpoints.down("md");
  const handelBtnClick = () => {
    axios
      .post("https://env-map-six.vercel.app/api", {
        comment: inputValue,
        problemTitle: title,
      })
      .then((res) => {
        console.log(res?.message);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/landing");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        axios
          .get("https://env-map-six.vercel.app/api/index", {
            params: {
              problemTitle: title,
            },
          })
          .then((res) => setComments(res.data))
          .catch((err) => console.log(err));
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchUsers(); // Call the fetchUsers function
    FetchData();
  }, []);

  console.log(comments);

  const FetchData = () => {
    data1?.map((index) => {
      if (index.title === title) {
        setObjData(index);
      }
    });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const navigate = useNavigate();

  console.log(data1);

  const textVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: { opacity: 0, y: -100, scale: 0.9, transition: { duration: 0.5 } },
  };

  const scrollAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
`;

  return (
    <Stack>
      <Navbar />

      <Parallax
        pages={3}
        ref={ref}
        style={{
          background: "rgb(7,24,32)",
          background:
            "linear-gradient(90deg,rgba(7,24,32,1) 0%,rgba(10,24,35,1) 9% , rgba(40,69,76,1) 50%, rgba(35,61,65,1) 85%)",
        }}
      >
        <ParallaxLayer offset={0} factor={1} speed={0.2}>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "aliceblue",
                fontSize: 60,
                fontWeight: "bold",
                textShadow: "2px 2px 1px black",
                mt: 20,
              }}
              variant={isMobile ? "h2" : "h1"}
            >
              {objData?.title}
            </Typography>
            <video
              style={{
                height: `${!isMobile ? "200px" : "500px"}`,
                marginTop: "60px",
                borderRadius: "20px",
                boxShadow: "2px 2px 0px black",
                pointerEvents: "auto",
              }}
              src={objData?.vidoe}
              autoPlay
              controls
            />
            <Stack
              sx={{
                height: "40px",
                width: "20px",
                border: "2px solid white",
                borderRadius: "100px",
                alignItems: "center",
                mt: 3,
              }}
              onClick={() => ref.current.scrollTo(1)}
            >
              <Stack
                sx={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50px",
                  background: "white",
                  mt: 0.8,
                  animation: `${scrollAnimation} 2s ease-in-out infinite`,
                  animationDelay: "10s",
                }}
              />
            </Stack>
          </Stack>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.8 : 1} factor={2} speed={0.3}>
          <Stack
            sx={{
              flexDirection: { lg: "row", xs: "column" },
              justifyContent: "center",
              alignItems: "center",
              p: { lg: 10, xs: 2 },
              pb: { xs: 0, lg: 5 },
              gap: { lg: 4, xs: 2 },
            }}
          >
            <Stack
              sx={{
                gap: { lg: 5, xs: 3 },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant={isMobile ? "h3" : "h1"}
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Issue
              </Typography>
              <Stack
                sx={{
                  borderRadius: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant={isMobile ? "h5" : "h3"}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    width: { lg: "700px", xs: "340px" },
                    textAlign: "center",
                  }}
                >
                  {objData.Issue}
                </Typography>
              </Stack>
            </Stack>
            {objData?.images?.length && (
              <Box
                component={"img"}
                src={objData?.images[0]}
                sx={{
                  width: { lg: "800px", xs: "300px" },
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            )}
          </Stack>
          <Stack
            sx={{
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              justifyContent: "center",
              p: { lg: 10, xs: 3 },
              pt: 0,
              gap: { lg: 4, xs: 2 },
            }}
          >
            {objData?.images?.length && (
              <Box
                component={"img"}
                src={objData?.images[1]}
                sx={{
                  width: { lg: "800px", xs: "300px" },
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            )}
            <Stack
              sx={{
                gap: { lg: 5, xs: 2 },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant={isMobile ? "h3" : "h1"}
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Solution
              </Typography>
              <Stack
                sx={{
                  borderRadius: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant={isMobile ? "h5" : "h3"}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    width: { lg: "700px", xs: "340px" },
                    textAlign: "center",
                  }}
                >
                  {objData.solution}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </ParallaxLayer>
        <ParallaxLayer offset={2} factor={3} speed={0.3}>
          <Stack
            sx={{
              flexDirection: { lg: "row", xs: "column" },
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <Stack
              sx={{
                gap: 10,
                flex: 1,
                pl: { lg: 13 },
              }}
            >
              <Stack
                sx={{
                  gap: 10,
                  mt: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant={isMobile ? "h4" : "h2"}
                  fontWeight={"bold"}
                  sx={{
                    color: "aliceblue",
                    mt: { lg: 10, xs: 3 },
                  }}
                >
                  We would like to hear your solutions
                </Typography>
              </Stack>
              <Stack
                sx={{
                  width: "100%",
                  gap: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  variant="outlined"
                  value={inputValue}
                  onChange={handleInputChange}
                  multiline
                  rows={6}
                  sx={{
                    width: { lg: "620px", xs: "300px" },
                    backgroundColor: "aliceblue",
                    "& >*": {
                      borderRadius: "4px",
                      border: `1px solid ${theme.palette.secondary.main}`,
                      borderColor: theme.palette.secondary.main,
                    },
                  }}
                  placeholder="Enter your solution"
                />
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    width: { lg: "620px", xs: "300px" },
                  }}
                  onClick={handelBtnClick}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
            <Stack
              sx={{
                flex: 1,
                mt: "80px",
                gap: 4,
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                fontWeight={"bold"}
                sx={{
                  color: "aliceblue",
                  mt: 10,
                }}
              >
                Other people opinion
              </Typography>
              <Stack
                sx={{
                  flexWrap: "wrap",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                {comments?.data?.map((comment, i) => {
                  if (i >= 3) {
                    return;
                  }
                  return <Comment title={comment.problemTitle} />;
                })}
                {comments?.count > 3 && (
                  <Typography variant="h5" color="white">
                    +{comments.count - 3} More
                  </Typography>
                )}
                {(!comments?.data || comments?.data?.length <= 0) && (
                  <Typography variant="h4" color="white">
                    No comments found!
                  </Typography>
                )}
              </Stack>
            </Stack>
          </Stack>
        </ParallaxLayer>
      </Parallax>
    </Stack>
  );
};

export default Transition(Details);
