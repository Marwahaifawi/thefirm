import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Stack, Typography } from "@mui/material";
import ButtonApp from "../../shared/button";

const GetInTouch = () => {
  const form = useRef();
  const subjects = [
    {
      value: "Cases",
      label: "Cases",
    },
    {
      value: "Blogs",
      label: "Blogs",
    },
    {
      value: "Solutions",
      label: "Solutions",
    },
    {
      value: "Appointments",
      label: "Appointments",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ookeyt4",
        "template_xrzphdi",
        form.current,
        "-7Exf-bWzD1yN4UBV"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };

  return (
    <Stack>
      <Box
        component="form"
        ref={form}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "5rem",
          rowGap: "3rem",
          borderRadius: "15px",
          boxShadow: "0px 19px 34px 14px rgba(0, 0, 0, 0.06)",
          padding: "5rem 2rem",
          "& .MuiTextField-root": { m: 2, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4" textAlign="center">
          Get In Touch
        </Typography>

        <Box>
          <TextField
            id="standard-required-name"
            label="Name"
            defaultValue="Your Name"
            name="toName"
            variant="standard"
          />
          <TextField
            id="standard-required-email"
            label="Email"
            defaultValue="Your Email"
            variant="standard"
            name="toEmail"
          />
        </Box>
        <Box>
          <TextField
            id="standard-required-phone"
            label="Phone"
            defaultValue="05********"
            variant="standard"
          />
          <TextField
            id="standard-select-subject"
            select
            label="Subject"
            defaultValue=""
            variant="standard"
            name="message"
          >
            {subjects.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <ButtonApp onClick={sendEmail} variant="contained">
            Submit
          </ButtonApp>
        </Box>
      </Box>
    </Stack>
  );
};

export default GetInTouch;
