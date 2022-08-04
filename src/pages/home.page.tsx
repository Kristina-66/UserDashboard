import { Container } from "@mui/material";

import DataTable from "../components/UserList";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <DataTable />
      <div style={{ height: 400, width: "100%" }}></div>
    </Container>
  );
};

export default HomePage;
