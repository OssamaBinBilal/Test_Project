import React from "react";
import logo from "../assets/logo1500.png";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={logo} width={400} />
        </Box>
        <Box sx={{ ml: 5 }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            RT-9 - Your Path to Seamless <br /> Learning and Assessment
          </Typography>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/admin/login`}
          >
            <Button
              variant="contained"
              sx={{ width: "100%", mt: 2, fontWeight: "bold" }}
              onClick={() => {}}
            >
              I'm an admin
            </Button>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/teacher/login`}
          >
            <Button
              variant="contained"
              sx={{ width: "100%", mt: 2, fontWeight: "bold" }}
            >
              I'm a teacher
            </Button>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/student/login`}
          >
            <Button
              variant="contained"
              sx={{ width: "100%", mt: 2, fontWeight: "bold" }}
            >
              I'm a student
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
