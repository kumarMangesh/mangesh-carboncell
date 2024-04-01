import React from "react";
import { Typography, Box, Divider, Chip } from "@mui/material";

const UpdatedTime = ({ time }) => {
  const parseDate = (timestamp) => {
    if (timestamp) {
      const date = new Date(timestamp).toISOString().split("T")[0];
      console.log(date);
      return date;
    }
  };
  return (
    <>
      <Box
        // display="flex"
        // flexDirection="column"
        // justifyContent="center"
        // alignItems="flex-start"
        padding={1}
        textAlign="left"
      >
        <Divider textAlign="left">
          <Typography variant="body2">Today's Bitcoin Price</Typography>
        </Divider>
        <Chip sx={{color: "green"}} label={parseDate(time?.updated)} variant="outlined" />
         
      </Box>
    </>
  );
};

export default UpdatedTime;
