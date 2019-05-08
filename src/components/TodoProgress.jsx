import React, { Component } from 'react';
import TodoproItem from './TodoproItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return (
        this.props.todos.map(
            todo => <div className="ui-state-default"><TodoproItem key={todo.id} type={this.props.type} todo={todo} markDone={this.props.markDone} markToggle={this.props.markToggle} deleteTodo={this.props.deleteTodo} /><br/></div>
        )
    );
  }
}

//PropTypes
Todos.propTypes = {
  todos : PropTypes.array.isRequired
}

export default Todos;
