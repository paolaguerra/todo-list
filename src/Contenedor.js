import React, { useState } from "react";
import { BottomBar } from "./BottomBar";
import "./index.css";
import { TextBox } from "./TextBox";
import { ToDoBox } from "./ToDoBox";

let lastId = 0;

export const Contenedor = () => {
  const [myNotes, setMyNotes] = useState([]);

  const handleSave = (myText) => {
    lastId = lastId + 1;

    const newItem = {
      task: myText,
      id: lastId,
    };
    const newArray = [...myNotes, newItem];
    setMyNotes(newArray);

    
  };

  const deleteTask = (task) => {
    const newArray = myNotes.filter((note) => {
      return note.task !== task;
    });
    setMyNotes(newArray);
  };

  console.log(myNotes);
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
