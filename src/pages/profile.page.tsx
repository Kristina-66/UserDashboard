import { Box, Container, Typography } from "@mui/material";
import { Image } from "mui-image";

import { useAppSelector } from "../redux/store";
import Avatar from "../assets/avatar.png";

const ProfilePage = () => {
  const user = useAppSelector((state) => state.userState.user);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 2 }}>
        <Image src={Avatar} fit="scale-down" height={300} />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {user?.name}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          {user?.email}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          <strong>Id: </strong>
          {user?._id}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          <strong>Status: </strong>
          {user?.status}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          <strong>Role: </strong>
          {user?.role}
        </Typography>
      </Box>
    </Container>
  );
};

export default ProfilePage;
