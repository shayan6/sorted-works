import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return (
        this.props.todos.map(
            todo => <div className="ui-state-default"><TodoItem key={todo.id} todo={todo} markProgress={this.props.markProgress} markDone={this.props.markDone} markToggle={this.props.markToggle} deleteTodo={this.props.deleteTodo} /><br/></div>
        )
    );
  }
}

//PropTypes
Todos.propTypes = {
  todos : PropTypes.array.isRequired
}

export default Todos;
