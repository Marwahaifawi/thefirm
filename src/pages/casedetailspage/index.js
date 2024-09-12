import { Container, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CaseDetailsHeroSection from "../../components/casedetailsherosection";
import api from "../../api/api";

const CaseDetailsPage = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { caseID } = useParams();

  useEffect(() => {
    const getCases = async () => {
      try {
        const response = await api.get("/cases");
        setCases(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getCases();
  }, []);

  if (loading) {
    // Show a loading indicator while fetching cases
    return <Typography variant="body2" align="center">Loading...</Typography>;
  }

  if (error) {
    // Show an error message if there was an error fetching cases
    return <Typography variant="body2" align="center">An error occurred while fetching the case.</Typography>;
  }

  const singleCase = cases.find((caseObj) => caseObj.id === parseInt(caseID));
  if (!singleCase) {
    // Case not found, handle this case (e.g., show a message or redirect)
    return <Typography variant="body2" align="center">Case not found.</Typography>;
  }

  return (
    <Container>
      <CaseDetailsHeroSection
        caseName={singleCase.title}
        description={singleCase.description}
        image={singleCase.image}
      />
      <Stack p={2} spacing={1} mt={10}>
        <Typography textAlign="center" gutterBottom variant="h4">
          {singleCase.title}
        </Typography>
        <Typography textAlign="center" variant="body2" lineHeight={2}>
          {singleCase.details}
        </Typography>
      </Stack>
    </Container>
  );
};

export default CaseDetailsPage;
