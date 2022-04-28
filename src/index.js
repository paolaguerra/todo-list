import {createRoot} from "react-dom/client";
import React from "react";
import { Contenedor } from "./Contenedor";

const divRoot = document.querySelector('#root');
const root = createRoot (divRoot);

root.render(<Contenedor />);