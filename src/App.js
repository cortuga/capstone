import React, { Component } from "react"
import Todos from "./components/Todos"
import "bulma/css/bulma.css"

class App extends Component {
  state = {
    todos: [
      {
        id: Math.random() + 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: true
      }
    ]
  }
  render() {
    return
    ;<>
      <div>
        <Todos todos={this.state.todos} />
      </div>
    </>
  }
}
export default App
