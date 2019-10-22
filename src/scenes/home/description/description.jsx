import React from "react";

import { Grid, Typography } from "@material-ui/core";

import "./description.scss";

export const Description = () => {
  return (
    <Grid container direction="row" className="home__group__description">
      <Typography variant="h4" component="span">
        Informe o quanto você pode doar e veja o impacto dessa ação!
      </Typography>
    </Grid>
  );
};
