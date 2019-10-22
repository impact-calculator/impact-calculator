import React from "react";

import {
  Box,
  Grid,
  Typography
} from "@material-ui/core";

import Logo from "@/assets/images/logo.png";

import "./brand.scss";

export const Brand = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className="home__group__brand"
    >
      <Grid item xs="12" md="3">
        <img src={Logo} alt="logo" width="120px" height="120px" />
      </Grid>
      <Grid item xs="12" md="7">
        <Typography
          className="home__group__brand__logo"
          variant="h3"
          component="span"
        >
          <Box fontWeight="fontWeightBold" m={1}>
            calculadora de impacto
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
};
