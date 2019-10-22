import React, { useState } from "react";

import { Button, Grid, InputAdornment, TextField } from "@material-ui/core";

import "./calculate.scss";

export const Calculate = () => {
  const [value, setValue] = useState();

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className="home__group__donation"
    >
      <Grid item xs="8" md="8">
        <TextField
          type="number"
          name="value"
          label="Quanto você pode doar?"
          value={value}
          onChange={e => setValue(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>
          }}
        />
      </Grid>
      <Grid item xs="4" md="4">
        <Button fullWidth color="primary" variant="contained">
          Calcular
        </Button>
      </Grid>
    </Grid>
  );
};
