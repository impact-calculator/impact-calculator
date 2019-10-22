import React from "react";

import { Fab, Grid, Typography } from "@material-ui/core";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import Background from "@/assets/images/background.png";

import { Brand } from "./brand/brand";
import { Description } from "./description/description";
import { Calculate } from "./calculate/calculate";

import "./home.scss";

export const Home = () => {
  return (
    <React.Fragment>
      <Grid container justify="center" className="home">
        <Grid
          container
          direction="column"
          xs="12"
          md="7"
          lg="6"
          xl="5"
          className="home__group"
        >
          <Brand />
          <Description />
          <Calculate />
        </Grid>
        <Grid
          container
          xs="0"
          md="5"
          lg="6"
          xl="7"
          justify="flex-end"
          className="home__image"
        >
          <img src={Background} alt="imagem de background" />
        </Grid>
        <div className="home__info">
          <Typography>Saiba Mais</Typography>
          <Fab variant="round" size="small" aria-label="Saiba Mais">
            <ArrowDownwardIcon />
          </Fab>
        </div>
      </Grid>
    </React.Fragment>
  );
};
