import React, { useState } from "react";
import { BottomBar } from "./BottomBar";
import "./index.css";
import { TextBox } from "./TextBox";
import { ToDoBox } from "./ToDoBox";

let lastId = 0;

export const Contenedor = () => {
  const [myNotes, setMyNotes] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All"); // All, Active y Complete

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

  const deleteNotesChecked = () => {
    const newArray = myNotes.filter((note) => {
      return note.checked === false;
    });
    setMyNotes(newArray);
  };

  const showCompleteTasks = () => {
    setActiveFilter("Complete");
  };

  const activeTasksOnly = () => {
    setActiveFilter("Active");
  };

  const allTasks = () => {
    setActiveFilter("All");
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
    const myFilteredArray = myNotes.filter((note) => note.checked === false);

    return myFilteredArray.length;
  };

  let filteredNotes;

  if (activeFilter === "Active") {
    filteredNotes = myNotes.filter((note) => {
      if (note.checked === false) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (activeFilter === "Complete") {
    filteredNotes = myNotes.filter((note) => {
      if (note.checked === true) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (activeFilter === "All") {
    filteredNotes = [...myNotes];
  }

  console.log(filteredNotes);

  return (
    <>
      <div className="contenedor">
        <h1 className="todo"> T O D O</h1>
        <TextBox onSave={handleSave}></TextBox>

        {filteredNotes.map((note) => {
          return (
            <ToDoBox
              note={note}
              key={note.id}
              onEdit={editNote}
              onDelete={deleteNote}
            ></ToDoBox>
          );
        })}
        <BottomBar
          onAll={allTasks}
          onActive={activeTasksOnly}
          onDelete={deleteNotesChecked}
          onComplete={showCompleteTasks}
          count={getPendingNotesCounter()}
        />
      </div>
    </>
  );
};
