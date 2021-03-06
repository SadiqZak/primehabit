import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from "@chakra-ui/react";
import {theme} from './utils/theme'

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App /> 
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
