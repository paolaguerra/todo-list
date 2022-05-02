import React from "react";
import "./index.css";
import { TextBox } from "./TextBox";
import { ToDoBox } from "./ToDoBox";

export const Contenedor = () => {
  return (
    <>
      <div className="contenedor">
        <h1 className="todo"> T O D O</h1>
        <TextBox></TextBox>
        <ToDoBox></ToDoBox>
      </div>
    </>
  );
};
