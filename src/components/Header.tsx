import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userApi } from "../redux/api/userApi";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { useAppSelector } from "../redux/store";
import { useLogoutUserMutation } from "../redux/api/authApi";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.userState.user);

  const [logoutUser, { isLoading, isSuccess, error, isError }] =
    useLogoutUserMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }

    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "bottom-right",
          })
        );
      } else {
        toast.error((error as any).data.message, {
          position: "bottom-right",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const onLogoutHandler = async () => {
    logoutUser();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#969cbb" }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer" }}
          >
            User Dashboard
          </Typography>
          <Box display="flex" sx={{ ml: "auto" }}>
            {!user && (
              <>
                <Tooltip title="SignUp" onClick={() => navigate("/register")}>
                  <IconButton
                    aria-label="Account"
                    size="large"
                    sx={{ color: "white" }}
                  >
                    {" "}
                    <PersonAddIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Login" onClick={() => navigate("/login")}>
                  <IconButton
                    aria-label="Account"
                    size="large"
                    sx={{ color: "white" }}
                  >
                    {" "}
                    <PersonIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
              </>
            )}
            {user && (
              <>
                <Tooltip title="Profile" onClick={() => navigate("/profile")}>
                  <IconButton
                    aria-label="Account"
                    size="large"
                    sx={{ color: "white" }}
                  >
                    {" "}
                    <AccountCircleIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Logout" onClick={onLogoutHandler}>
                  <IconButton
                    aria-label="Logout"
                    size="large"
                    sx={{ color: "white" }}
                  >
                    <CancelIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
