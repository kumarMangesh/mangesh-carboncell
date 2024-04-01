import React from "react";
import Header from "./Header";
import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      <Header title="About Me" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        variant="h3"
      >
        <Typography variant="h4">Hi,</Typography>
        <Typography variant="body1">
          I am Mangesh, a frontend developer with over 2 years of experience.
        </Typography>
        <Typography variant="body1">
          Till now i have contributed in two startups and learned a lot.
        </Typography>
        <Typography variant="body1">
          Worked as a sole frontend developer and founding member for two
          projects.
        </Typography>
        <br/>
        <Typography variant="body1">
          Love Science, and eager to know how things works.
        </Typography>
      </Box>
    </>
  );
};

export default AboutMe;
