import React from "react";
import PropTypes from "prop-types";
import cross from "./img/cross.png";
import oval from "./img/oval.png";

export const ToDoBox = (props) => {
  const borrar = (event) => {
    props.onDelete(props.task);
  };

  return (
    <div className="contenedor-todobox">
      <div className="text-todo">
        <div className="todo-box">
          <div className="oval">
            <img className="oval-imagen" alt="oval" src={oval}></img>
          </div>
          <p className="task-text">{props.task}</p>
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
