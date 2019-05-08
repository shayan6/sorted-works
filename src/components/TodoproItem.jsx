import React, { Component } from "react";
import PropTypes from "prop-types";
import checkIcon from "../icons/check.png";

class TodoItem extends Component {
  getStyle = () => {
    return {
      height: "120px",
      backgroundImage: "linear-gradient(to right, #ffe595, #ffc107)",
      padding: "2%",
      borderRadius: "6px",
      borderBottom: "1px dotted #ccc",
      boxShadow: "1px 1px 4px grey",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
        <div style={this.getStyle()}  class="ui-icon ui-icon-arrowthick-2-n-s" >
          <div style={{ color: "#2196F3" }}>
            <input
              type="checkbox"
              onChange={this.props.markToggle.bind(this, id)}
            />
            <p>{" " + title}</p>
            <hr />
            <img
              className="mr-2"
              style={{ float: "left", width: "32px" }}
              src={checkIcon}
              onClick={this.props.markDone.bind(this, id, title)}
            />
            <img
              className="mr-2"
              src="https://cdn0.iconfinder.com/data/icons/classic-icons/512/076.png"
              style={{ float: "right", width: "32px" }}
              onClick={this.props.deleteTodo.bind(this, id)}
            />
          </div>
        </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
