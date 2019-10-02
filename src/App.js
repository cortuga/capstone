import React, { Component } from "react"
import Nav from "./components/Nav"
import Journal from "./components/Journal"
import Todos from "./components/Todos"
import Calender from "./components/Calender"
import LifeGoals from "./components/LifeGoals"
import Profile from "./components/Profile"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import "bulma/css/bulma.css"

class App extends Component {
  // state = {
  //   todos: [
  //     {
  //       id: Math.random() + 1,
  //       title: "Take out the trash",
  //       completed: false
  //     },
  //     {
  //       id: 2,
  //       title: "Dinner",
  //       completed: false
  //     },
  //     {
  //       id: 3,
  //       title: "Meeting with boss",
  //       completed: true
  //     }
  //   ]
  // }
  render() {
    return (
      <>
        <Router>
          <Nav>
            <Switch>
              <Route path='/' component={Home} />
              <Route path='/Journal' component={Journal} />
              <Route path='/Todos' component={Todos} />
              <Route path='/Calender' component={Calender} />
              <Route path='/LifeGoals' component={LifeGoals} />
              <Route path='/Profile' component={Profile} />
            </Switch>
          </Nav>
        </Router>
      </>
    )
  }
}
const Home = () => (
  <>
    <h1>Home Page</h1>
  </>
)
export default App
