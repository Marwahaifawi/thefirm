import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import CasesImage from "../../assets/herosectionimgs/casesPageHeroSectionImg.png";
import useStyles from "./casesPageHeroSectionStyles";

const CasesPageHeroSection = () => {
  const classes = useStyles();

  return (
    <Stack
      spacing={5}
      alignItems="center"
      mt={15}
      direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
    >
      <Stack spacing={2} width={"50%"} justifyContent="center">
        <Typography textAlign={{ xs: "center", lg: "left " }} variant="h4">
          Our Research &<br /> Case Studies.
        </Typography>
        <Typography
          textAlign={{ xs: "center", lg: "left " }}
          variant="body1"
          lineHeight={2}
        >
          Exploring the frontiers of knowledge, illuminating pathways to
          success:
          <br /> Our research and case studies.
        </Typography>
      </Stack>
      <Stack alignItems="center" width={"50%"}>
        <img alt="heroSectionPic" src={CasesImage} className={classes.img} />
      </Stack>
    </Stack>
  );
};

export default CasesPageHeroSection;
