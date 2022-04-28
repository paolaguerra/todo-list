import React from "react";
import background from "./img/background.jpeg";
import "./index.css";
import { TextBox } from "./TextBox";
import { ToDoBox } from "./ToDoBox";

export const Contenedor = () => {
  return (
    <div className="contenedor">
      <h1 className="todo"> T O D O</h1>
      <TextBox></TextBox>
      <div className="background-white"></div>
      <div className="background-top"></div>
      <img className="background-img" alt="background" src={background}></img>
      <ToDoBox></ToDoBox>
    </div>
  );
};
