import React, { useRef, useState, useEffect } from "react";
import {
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import ButtonApp from "../../shared/button";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../../firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmedRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading, navigate]);

  const handleSignInClick = () => {
    navigate("/login");
  };

  const register = () => {
    if (!name) {
      alert("Please enter a name");
      return;
    }
    if (password !== confirmedPassword) {
      setPasswordsMatch(false);
      return;
    }
    registerWithEmailAndPassword(name, email, password);
    navigate("/");
  };

  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" mt={30} mb={30} direction="column">
        <Typography variant="h4" color="primary.main">
          Sign Up Now
        </Typography>
        <Box alignItems="center" component="form" noValidate mt={3} mb={2}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                name="fullName"
                required
                fullWidth
                id="fullName"
                label="Full Name here"
                autoFocus
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 5px 15px -3px rgba(60, 60, 59, 0.18)",
                  borderColor: "primary.main",
                }}
                inputRef={fullNameRef}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="Email"
                label="Enter your email address"
                name="Email"
                inputRef={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="Enter your password"
                name="password"
                type="password"
                inputRef={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Confirm password"
                type="password"
                id="confirmedPassword"
                inputRef={passwordConfirmedRef}
                onChange={(e) => setConfirmedPassword(e.target.value)}
                error={!passwordsMatch}
                helperText={!passwordsMatch && "Passwords do not match"}
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
                onClick={register}
                type="submit"
                variant="contained"
                disabled={loading}
              >
                Submit
              </ButtonApp>
            </Grid>
          </Grid>
        </Box>
        <Grid container justifyContent="center">
          <Grid item>
            <Divider variant="middle" />
            <Link color="#A7A7A6" variant="body2">
              Already have an account?
            </Link>
            <Link
              className="clickable"
              variant="body2"
              underline="hover"
              onClick={handleSignInClick}
            >
              Sign in
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default SignUp;
