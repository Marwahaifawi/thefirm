import React from "react";
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonApp from "../../shared/button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  img: {
    [theme.breakpoints.up("xs")]: {
      width: "0%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "85%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
    height: "auto",
    objectFit: "cover",
  },
}));
const CaseDetailsHeroSection = ({ caseName, description, image }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const goToSolutionsPage = () => {
    navigate("/solutions");
  };
  return (
    <Stack
      spacing={5}
      alignItems="center"
      mt={15}
      direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
    >
      <Stack spacing={2} width={"50%"} justifyContent="center">
        <Typography textAlign={{ xs: "center", lg: "left " }} variant="h4">
          {caseName}
        </Typography>
        <Typography
          textAlign={{ xs: "center", lg: "left " }}
          variant="body1"
          lineHeight={2}
        >
          {description}
        </Typography>
        <Stack direction={{ lg: "row", md: "row", sm: "column" }} spacing={2}>
          <ButtonApp onClick={goToSolutionsPage} variant={"contained"}> Digital Partner</ButtonApp>
          <ButtonApp onClick={goToSolutionsPage} variant={"contained"}> Coaching</ButtonApp>
        </Stack>
      </Stack>
      <Stack alignItems="center" width={"50%"}>
        <img alt="heroSectionPic" src={image} className={classes.img} />
      </Stack>
    </Stack>
  );
};

export default CaseDetailsHeroSection;
