import React, { useState, useEffect, useMemo } from "react";
import { Stack, Grid, Container } from "@mui/material";
import ButtonApp from "../../shared/button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import CaseCard from "../casecard";
import api from "../../api/api";

const CasesFilter = () => {
  const [clicked, setClicked] = useState(0);
  const filters = useMemo(
    () => ["Show All", "Coaching", "Digital Partners", "SEO"],
    []
  );
  const [cases, setCases] = useState([]);
  const [filteredCases, setFilteredCases] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getCasesData = async () => {
      try {
        const response = await api.get("/cases");
        const allCases = response.data;
        setCases(allCases);
        setFilteredCases(allCases);
      } catch (error) {
        // console.error("Error retrieving cases:", error);
      }
    };

    getCasesData();
  }, []);

  useEffect(() => {
    const filterCases = () => {
      if (clicked === 0) {
        setFilteredCases(cases);
      } else {
        const filtered = cases.filter(
          (item) => item.solution === filters[clicked]
        );
        setFilteredCases(filtered);
      }
    };

    filterCases();
  }, [clicked, cases, filters]);

  useEffect(() => {
    const searchCases = () => {
      const filtered = cases.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCases(filtered);
    };

    searchCases();
  }, [searchQuery, cases]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Stack alignItems="center" p={5}>
      <Stack
        spacing={{ lg: 10, md: 10, sm: 5 }}
        direction={{ lg: "row", md: "row", sm: "row" }}
      >
        {filters.map((item, index) => (
          <ButtonApp
            key={index}
            variant={index === clicked ? "contained" : "outlined"}
            onClick={() => setClicked(index)}
          >
            {item}
          </ButtonApp>
        ))}
        <TextField
          label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Container>
        <Grid
          mt={4}
          container
          alignItems="center"
          direction={{ md: "row", lg: "row" }}
          spacing={5}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {filteredCases.map((item) => (
            <Grid item xs={4} key={item.id}>
              <CaseCard
                image={item.image}
                description={item.description}
                title={item.title}
                caseID={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default CasesFilter;
