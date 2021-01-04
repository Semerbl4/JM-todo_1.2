import React from "react";
import ReactDOM from "react-dom";

import "./NewTaskForm.css";

let NewTaskForm = (props) => (
  <header className="header">
    <h1>todos</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    />
  </header>
);

export default NewTaskForm;
