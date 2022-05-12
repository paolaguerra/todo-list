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

  return (
    <div className="bottom-bar">
      <div className="bar">
        <div className="text-bar">
          <button className="tasks-left">{props.count} tasks left</button>
          <button onClick={allTasks} className="all-active-comp">All</button>
          <button onClick={activeTasks} className="all-active-comp">Active</button>
          <button onClick={completeTask} className="all-active-comp">Complete</button>
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
};
