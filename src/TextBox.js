import React, { useState } from "react";

export const TextBox = () => {
  
  const [myText, setmyText] = useState("");

  const cambiosDelInput = (event) => {
    setmyText(event.target.value);
    console.log(myText);
  };

    return (
      <div className="contenedor-notas">
        <div className="contenedor-input">
          <input
            className="textbox"
            type="text"
            value={myText}
            onChange={cambiosDelInput}
          ></input>
        </div>
      </div>
    )
  };

