import React from "react";

import "./App.css";

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

class App extends React.Component {
  state = {
    serverInfo: [{ id: 1 }, { id: 2, className: "editing" }, { id: 3 }],
  };

  completeChanged = (id, isCompleted) => {
    let { serverInfo } = this.state;
    serverInfo = JSON.stringify(serverInfo);
    serverInfo = JSON.parse(serverInfo);

    if (isCompleted) {
      let newServerInfo = serverInfo.map((el) => {
        if (el.id === id) {
          el.className = "completed";
        }
        return el;
      });
      // console.log("меняем на completed");
      // console.log(newServerInfo);

      this.setState({ serverInfo: newServerInfo });
    } else if (!isCompleted) {
      let newServerInfo = serverInfo.map((el) => {
        if (el.id === id) {
          delete el.className;
        }
        return el;
      });

      // console.log("удаляем className");

      this.setState({ serverInfo: newServerInfo });
    }
  };

  taskDestroyed = (id) => {
    let { serverInfo } = this.state;
    serverInfo = JSON.stringify(serverInfo);
    serverInfo = JSON.parse(serverInfo);

    let newServerInfo = serverInfo.filter((el) => {
      return el.id !== id;
    });

    this.setState({ serverInfo: newServerInfo });
  };

  render() {
    return (
      <section className="todoapp">
        <NewTaskForm />
        <TaskList
          todoData={this.state.serverInfo}
          completeChanged={this.completeChanged}
          taskDestroyed={this.taskDestroyed}
        />
        <Footer />
      </section>
    );
  }
}

export default App;
