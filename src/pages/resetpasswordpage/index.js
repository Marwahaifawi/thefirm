import React, { useEffect, useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordReset } from "../../firebase";
import ButtonApp from "../../shared/button";
import { UserContext } from "../../shared/authcontext";

import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading , navigate]);
  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" mt={30} mb={30} direction="column">
        <Typography variant="h4" color="primary.main">
          Reset Password
        </Typography>
        <Box alignItems="center" component="form" noValidate mt={3} mb={2}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Enter your email address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />
            </Grid>
            <Grid item>
              <ButtonApp
                onClick={() => sendPasswordReset(email)}
                variant="contained"
              >
                Send password reset email
              </ButtonApp>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default ResetPassword;
