import React from "react";
import ReactDOM from "react-dom";

import TaskFilter from "../TaskFilter/TaskFilter";

import "./Footer.css";

let Footer = (props) => (
  <footer className="footer">
    <span className="todo-count">1 items left</span>
    <TaskFilter />
    <button className="clear-completed">Clear completed</button>
  </footer>
);

export default Footer;
