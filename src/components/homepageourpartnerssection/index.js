import React from 'react';
import { Container, Stack, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import IconCard from '../iconcard';
import googleHovered from '../../assets/ourpartnersimgs/hoverdGoogleImg.png';
import Google from '../../assets/ourpartnersimgs/google.jpg';
import WindowsHovered from '../../assets/ourpartnersimgs/windowsHovered.webp';
import Windows from '../../assets/ourpartnersimgs/widowsImg.png';
import FireFoxHovered from '../../assets/ourpartnersimgs/hoveredFirFox.jpg';
import FireFox from '../../assets/ourpartnersimgs/firefoxImg.png';
import Safari from '../../assets/ourpartnersimgs/safariImg.png';
import SafariHovered from '../../assets/ourpartnersimgs/hoveredSafari.png';

const OurPartnersSection = () => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={3} mt={10}>
      <Typography variant="h4" textAlign="center">
        Our Partners
      </Typography>
      <Container>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={3}>
            <Link to="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <IconCard iconimage={Google} hoverimage={googleHovered} />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
              <IconCard iconimage={Windows} hoverimage={WindowsHovered} />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to="https://www.mozilla.org" target="_blank" rel="noopener noreferrer">
              <IconCard iconimage={FireFox} hoverimage={FireFoxHovered} />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to="https://www.apple.com/safari/" target="_blank" rel="noopener noreferrer">
              <IconCard iconimage={Safari} hoverimage={SafariHovered} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default OurPartnersSection;
