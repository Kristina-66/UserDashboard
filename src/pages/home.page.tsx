import { Container } from "@mui/material";

import DataTable from "../components/UserList";
import Welcome from "../components/Welcome";
import { useAppSelector } from "../redux/store";

const HomePage = () => {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <Container maxWidth="lg">
        {!user && (
      <Welcome/>
        )}
      {user && (
      <DataTable />
      )}
      <div style={{ height: 100, width: "100%" }}></div>
      
    </Container>
  );
};

export default HomePage;
