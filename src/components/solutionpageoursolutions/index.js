import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import BookingCard from "../bookingcard";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import solutionsData from "./solutionsData";

const OurSolutionsCards = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack spacing={5} mt={20} alignItems="center" justifyContent="center">
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Appointment was added successfully!
        </Alert>
      </Collapse>
      <Typography variant="h4" textAlign="center">
        Book An Appointment
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {solutionsData.map((item, index) => (
          <Grid
            item
            lg={4}
            md={6}
            sm={6}
            xs={12}
            key={index}
            sx={{ display: "flex" }}
          >
            <BookingCard
              image={item.image}
              description={item.description}
              title={item.title}
              setOpen={setOpen}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default OurSolutionsCards;
