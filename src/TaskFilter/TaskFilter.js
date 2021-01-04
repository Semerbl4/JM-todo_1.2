import React from "react";
import ReactDOM from "react-dom";
import "./TaskFilter.css";

let TaskFilter = (props) => (
  <ul className="filters">
    <li>
      <button className="selected">All</button>
    </li>
    <li>
      <button>Active</button>
    </li>
    <li>
      <button>Completed</button>
    </li>
  </ul>
);

export default TaskFilter;
