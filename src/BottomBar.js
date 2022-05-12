import React from "react";
import PropTypes from "prop-types";

export const BottomBar = (props) => {
  const clearComplete = (event) => {
    props.onDelete();
  };

  const completeTask = (event) => {
    props.onComplete();
  };

  const activeTasks = (event) => {
    props.onActive();
  };

  const allTasks = (event) => {
    props.onAll();
  };

  let allBtnCSSClass = "btn";
  if (props.focus === "All") {
    allBtnCSSClass = "btn btn-selected";
  }

  let activeBtnCSSClass = "btn";
  if (props.focus === "Active") {
    activeBtnCSSClass = "btn btn-selected";
  }

  let completeBtnCSSClass = "btn";
  if (props.focus === "Complete") {
    completeBtnCSSClass = "btn btn-selected";
  }

  return (
    <div className="bottom-bar">
      <div className="bar">
        <div className="text-bar">
          <button className="tasks-left">{props.count} tasks left</button>
          <button onClick={allTasks} className={allBtnCSSClass}>
            All
          </button>
          <button onClick={activeTasks} className={activeBtnCSSClass}>
            Active
          </button>
          <button onClick={completeTask} className={completeBtnCSSClass}>
            Complete
          </button>
          <button onClick={clearComplete} className="clear-complete">
            Clear Complete
          </button>
        </div>
      </div>
    </div>
  );
};

BottomBar.prototype = {
  count: PropTypes.number,
  onDelete: PropTypes.func,
  onComplete: PropTypes.func,
  onActive: PropTypes.func,
  onAll: PropTypes.func,
  focus: PropTypes.string,
};
