import React from "react";
// import ReactDOM from "react-dom";

import "./Task.css";

class Task extends React.Component {
  state = {
    isCompleted: true,
  };

  completed = (
    <label>
      <span className="description">Completed task</span>
      <span className="created">created 17 seconds ago</span>
    </label>
  );

  editing = (
    <label>
      <span className="description">Editing task</span>
      <span className="created">created 5 minutes ago</span>
    </label>
  );

  active = (
    <label>
      <span className="description">Active task</span>
      <span className="created">created 5 minutes ago</span>
    </label>
  );

  completeToogler = () => {
    let { isCompleted } = this.state;
    this.setState((state) => {
      // console.log(state);

      return {
        isCompleted: !isCompleted,
      };
    });
    // console.log(this.state);
    // console.log(this.props.id);

    this.props.completeChanged(this.props.id, isCompleted);
  };

  currentTaskDestroyed = () => {
    let { id } = this.props;

    this.props.taskDestroyed(id);
  };

  render() {
    return (
      <li {...this.props}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={this.completeToogler}
          />
          {this.props.className === "editing"
            ? this.editing
            : this.props.className === "completed"
            ? this.completed
            : this.active}
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={this.currentTaskDestroyed}
          ></button>
        </div>
        {this.props.className === "editing" ? (
          <input
            type="text"
            className="edit"
            defaultValue="Editing task"
          ></input>
        ) : null}
      </li>
    );
  }
}

export default Task;
