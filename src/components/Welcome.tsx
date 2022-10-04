import Cat from "../assets/TnKy.gif";

import { Container, Typography, Box } from "@mui/material";

const Welcome = () => {
  return (
    <>
    <Container sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}> 
      <Typography
        variant="h4"
        sx={{
            mt: 4,
          color: "#000000",
        }}
      >
        Welcome! Viewing is not available to unauthorized users...
      </Typography>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <img src={Cat} alt="gif welcome" />
      </Box>
      </Container>
    </>
  );
};

export default Welcome;
