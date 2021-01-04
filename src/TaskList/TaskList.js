import React from "react";
// import ReactDOM from "react-dom";

import "./TaskList.css";

import Task from "../Task/Task";

let TaskList = ({ todoData, completeChanged, taskDestroyed }) => {
  let arrTaskList = todoData.map((element) => {
    return (
      <Task
        {...element}
        key={element.id}
        completeChanged={completeChanged}
        taskDestroyed={taskDestroyed}
      />
    );
  });

  return <ul className="todo-list">{arrTaskList}</ul>;
};

export default TaskList;
