import React, { useState } from "react";
import SolutionCard from "../../components/solutioncard";
import ButtonApp from "../../shared/button";
import { Stack, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Solutions from "./solutionsData";

const SolutionsSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  return (
    <Stack
      spacing={{ xs: 10, md: 2, lg: 8 }}
      alignItems="center"
      mt={20}
      direction={{
        lg: "row",
        md: "row",
        sm: "column-reverse",
        xs: "column-reverse",
      }}
    >
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 1, md: -10, lg: -10 }}
      >
        {Solutions.map((item, index) => (
          <SolutionCard key={index} item={item} />
        ))}
      </Grid>
      <Stack
        spacing={2}
        width={"60%"}
        justifyContent={{ xs: "center", md: "center", lg: "left" }}
        alignItems={{ xs: "center", md: "center", lg: "flex-start" }}
      >
        <Typography
          textAlign={{ xs: "center", md: "center", lg: "left" }}
          variant="h4"
        >
          Perfect Solution for <br /> Your Business
        </Typography>
        <Typography
          textAlign={{ xs: "center", lg: "left" }}
          variant="body2"
          lineHeight={2}
        >
          {expanded ? (
            <>
              Discover optimal solutions for businesses: digital partnerships,
              SEO optimization, online booking, and professional coaching. These
              comprehensive strategies can propel your business forward,
              increase online visibility, streamline customer bookings, and
              provide expert guidance to enhance your success.
            </>
          ) : (
            <>
              Discover optimal solutions for businesses: digital partnerships,
              SEO optimization, online booking, and professional coaching....
            </>
          )}
        </Typography>
        <ButtonApp variant="contained" onClick={handleReadMore}>
          {expanded ? "Read Less" : "Read More"}
        </ButtonApp>
      </Stack>
    </Stack>
  );
};

export default SolutionsSection;
