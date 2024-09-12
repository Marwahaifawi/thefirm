import React, { useState } from "react";
import { Stack, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import ButtonApp from "../../shared/button";
import reasons from "./reasonsData";

const ReasonsToChooseUs = () => {
  const [clicked, setClicked] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  return (
    <Stack mt={20} justifyContent="center" alignItems="center" spacing={7}>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={4}
        width={"64%"}
      >
        <Typography variant="h4" textAlign="center">
          Reason to Choose Us
        </Typography>
        <Typography textAlign="center" variant="OVERLINE TEXT" lineHeight={2}>
          Experience excellence, trust the difference: Choose us as your
          preferred partner for unparalleled legal solutions and a track record
          of success.
        </Typography>
        <Stack
          spacing={3}
          direction={{ lg: "row", md: "column", sm: "column" }}
        >
          {reasons.map((item, index) => (
            <ButtonApp
              key={index}
              variant={index === clicked ? "contained" : "outlined"}
              onClick={() => setClicked(index)}
            >
              {item.name}
            </ButtonApp>
          ))}
        </Stack>
      </Stack>
      {clicked !== null && (
        <Stack
          width={"90%"}
          spacing={1}
          alignItems={{
            lg: "flex-start",
            md: "center",
            sm: "center",
            xs: "center",
          }}
          direction={{ lg: "row", md: "column", sm: "column" }}
        >
          <CardMedia
            component="img"
            sx={{ width: "60%" }}
            src={reasons[clicked].image}
            alt="Reason Image"
          />
          <img src={reasons[clicked].icon} alt="reasonImage" />
          <Stack
            paddingTop={"1.5rem"}
            direction="column"
            spacing={3}
            width={"70%"}
          >
            <Typography variant="h6"> {reasons[clicked].name}</Typography>
            <Typography variant="body2" lineHeight={2}>
              {expanded
                ? reasons[clicked].description
                : reasons[clicked].description.substring(0, 150) + "..."}
            </Typography>
            <ButtonApp variant="contained" onClick={handleReadMore}>
              {expanded ? "Read Less" : "Read More"}
            </ButtonApp>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default ReasonsToChooseUs;
