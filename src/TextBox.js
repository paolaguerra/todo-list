import React, { useState } from "react";

export const TextBox = (props) => {
  const [myText, setmyText] = useState("");

  const cambiosDelInput = (event) => {
    setmyText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.onSave(myText);
      setmyText("");
    }
  };

  return (
    <div className="contenedor-notas">
      <div className="contenedor-input">
        <input
          className="textbox"
          placeholder="New Task..."
          type="text"
          value={myText}
          onChange={cambiosDelInput}
          onKeyDown={handleKeyDown}
          autoFocus
        ></input>
      </div>
    </div>
  );
};
