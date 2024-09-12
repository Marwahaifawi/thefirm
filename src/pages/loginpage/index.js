import React, { useState , useContext } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ButtonApp from "../../shared/button";
import { Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logInWithEmailAndPassword } from "../../firebase";
import { UserContext } from "../../shared/authcontext";

const Login = () => {
  const navigate = useNavigate();
  const { register } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { user } = useContext(UserContext);
  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const handleResetClick = () => {
    navigate("/resetpassword");
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" mt={30} mb={30} direction="column">
        <Typography variant="h4" color="primary.main">
          Log In Please
        </Typography>
        <Box alignItems="center" component="form" noValidate mt={3} mb={2}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                {...register("email", { required: true })}
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
            <Grid item xs={12}>
              <TextField
                {...register("password", { required: true })}
                required
                fullWidth
                id="password"
                type="password"
                label="Enter your password"
                name="password"
                autoComplete="password"
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />

              <Grid item xs>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={1}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={rememberMe}
                        color="primary"
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                    }
                    label="Remember me"
                  />
                  <Link
                    className="clickable"
                    onClick={handleResetClick}
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Stack>
              </Grid>
            </Grid>
            <Grid item>
              <ButtonApp
                onClick={() =>logInWithEmailAndPassword(email, password) }
                type="submit"
                variant="contained"
              >
                Log In
              </ButtonApp>
            </Grid>
          </Grid>
        </Box>
        <Grid container justifyContent="center">
          <Grid item>
            <Divider variant="middle" />
            <Link color="#A7A7A6" href="#" variant="body2" underline="hover">
              Don’t have an account?
            </Link>

            <Link
              className="clickable"
              variant="body2"
              onClick={handleSignUpClick}
            >
              SIGN UP
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Login;
