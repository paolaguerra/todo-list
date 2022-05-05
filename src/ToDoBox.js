import React, { useState } from "react";
import PropTypes from "prop-types";
import cross from "./img/cross.png";
import oval from "./img/oval.png";
import check from "./img/check.png";

export const ToDoBox = (props) => {
  const [ovalSeleccionado, setOvalSeleccionado] = useState("oval");

  const borrar = (event) => {
    props.onDelete(props.task);
  };

  const checkMark = (event) => {
    setOvalSeleccionado("oval");
  };

  const checkOval = (event) => {
    setOvalSeleccionado("check");
  };

  let checkCSSClass = "btn";
  if (ovalSeleccionado === "check") {
    checkCSSClass = "btn btn-selected";
  }

  return (
    <div className="contenedor-todobox">
      <div className="text-todo">
        <div className="todo-box">
          <div className="botones-todobox">
            {ovalSeleccionado === "oval" && (
              <button className="boton" onClick={checkOval}>
                oval
                <img className="oval-imagen" alt="oval" src={oval}></img>
              </button>
            )}
            {ovalSeleccionado === "check" && (
              <button className="boton" onClick={checkMark}>
                check
                <img className="check-imagen" alt="check" src={check}></img>
              </button>
            )}
          </div>

          <p className={checkCSSClass}>{props.task}</p>

          <button className="boton-close" onClick={borrar}>
            <img className="cross-delete" alt="cross" src={cross}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

ToDoBox.propTypes = {
  task: PropTypes.string,
};
