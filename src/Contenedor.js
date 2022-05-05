import React, { useState } from "react";
import { BottomBar } from "./BottomBar";
import "./index.css";
import { TextBox } from "./TextBox";
import { ToDoBox } from "./ToDoBox";

export const Contenedor = () => {
  const [myNotes, setMyNotes] = useState([]);

  const handleSave = (myText) => {
    const newItem = { task: myText };
    const newArray = [...myNotes, newItem];
    setMyNotes(newArray);
  };

  const deleteTask = (task) => {
    const newArray = myNotes.filter((note) => {
      return note.task !== task;
    });
    setMyNotes(newArray);
  };

  return (
    <>
      <div className="contenedor">
        <h1 className="todo"> T O D O</h1>
        <TextBox onSave={handleSave}></TextBox>

        {myNotes.map((note) => {
          return (
            <ToDoBox
              task={note.task}
              key={note.task}
              onDelete={deleteTask}
            ></ToDoBox>
          );
        })}
        <BottomBar></BottomBar>
      </div>
    </>
  );
};
