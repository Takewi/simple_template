import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { App } from "./components/App";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");
const extendedTheme = extendTheme({ colors });

ReactDOM.render(
    <ChakraProvider theme={extendedTheme}>
        <App />
    </ChakraProvider>,
    document.getElementById("root")
);
