import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Slab", "Shadows Into Light", "Titillium Web"].join(
      ","
    ),
    h1: {
      fontFamily: "Shadows Into Light,cursive ",
    },
    h2: {
      fontFamily: "Titillium Web, sans-serif",
    },
    h3: {
      fontFamily: "Titillium Web, sans-serif",
    },
    h4: {
      fontFamily: "Titillium Web, sans-serif",
    },
    h5: {
      fontFamily: "Titillium Web, sans-serif",
    },
    h6: {
      fontFamily: "Titillium Web, sans-serif",
    },
    p: {
      fontFamily: "Roboto Slab",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
