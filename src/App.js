import React from "react";

import AppRouter from "./Router";

import blue from '@material-ui/core/colors/blue';
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "normalize.css";
import "./assets/styles/layout.scss";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "black"
    },
    primary: blue
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
  }
}));

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppRouter />
  </ThemeProvider>
);

export default App;
