import React, { Component } from "react"
// import PropTypes from "prop-types"

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }

  render() {
    return (
      <div>
        <p>
          <input type='checkbox' />
          {this.props.todo}
        </p>
      </div>
    )
  }
}

// PropTypes
// TodoItem.propTypes = {
//   todo: PropTypes.objects.isRequired
// }

export default TodoItem
