import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useContext } from "react";
import AppointmentsTable from "../../components/appointmentstable";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../shared/authcontext";

const AppointmentsPage = () => {
  const { user, loading } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack>
      <Typography
        gutterBottom
        mt={20}
        textAlign={"center"}
        variant="h4"
        color={"primary"}
      >
        Your Appointments
      </Typography>
      <Container mt={5}>
        <AppointmentsTable />
      </Container>
    </Stack>
  );
};

export default AppointmentsPage;
