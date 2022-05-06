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
      id: lastId,
      task: myText,
      checked: false,
    };
    const newArray = [...myNotes, newItem];
    setMyNotes(newArray);
  };

  const deleteNote = (id) => {
    const newArray = myNotes.filter((note) => {
      return note.id !== id;
    });
    setMyNotes(newArray);
  };

  const editNote = (id, newProps) => {
    // 1. Search for note:
    let indexFound;
    let noteFound = myNotes.find((note, index) => {
      if (note.id === id) {
        indexFound = index;
        return true;
      }
      return false;
    });

    // 2. Verify if found and has a value:
    if (noteFound !== undefined && noteFound !== null) {
      // 3. Note found and with a value.
      noteFound = { ...noteFound, ...newProps };

      // 4. Create array to overwrite the old one:
      const newArray = [...myNotes];

      // 5. Remove the old item, and add the updated one instead:
      newArray.splice(indexFound, 1, noteFound);

      // Only update if I found the note:
      setMyNotes(newArray);
    }
  };

  const getPendingNotesCounter = () => {
    return 5;
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
              note={note}
              key={note.task}
              onEdit={editNote}
              onDelete={deleteNote}
            ></ToDoBox>
          );
        })}
        <BottomBar count={getPendingNotesCounter()} />
      </div>
    </>
  );
};
