/* eslint-disable jsx-a11y/anchor-is-valid */
import { MouseEvent } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useSignUpComponent from "./useSignUpComponent";
import useValidation from "./useValidation";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Marvel
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

interface ISignUp {
  setLoginQuery: (value: boolean) => void;
}

const SignUp = ({ setLoginQuery }: ISignUp) => {
  const { signUp } = useSignUpComponent();
  const validation = useValidation(signUp);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={validation.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={validation.values.email}
            onChange={validation.handleChange}
            error={validation.touched.email && Boolean(validation.errors.email)}
            helperText={validation.touched.email && validation.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={validation.values.password}
            onChange={validation.handleChange}
            error={
              validation.touched.password && Boolean(validation.errors.password)
            }
            helperText={
              validation.touched.password && validation.errors.password
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                onClick={(e: MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  setLoginQuery(true);
                }}
                href="#"
                variant="body2"
              >
                Have an account?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default SignUp;
