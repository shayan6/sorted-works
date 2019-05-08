import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import TodoProgress from "./components/TodoProgress";
import Header from "./components/Header";
import HeaderCol from "./components/HeaderCol";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import axios from "axios";

class App extends Component {
  state = {
    todos: [
      { id: uuid.v4(), title: "Dinner with Friend", completed: false, type:1 },
      { id: uuid.v4(), title: "Go To Bed", completed: false, type:1 },
      { id: uuid.v4(), title: "Feeeling tired ...:(((((", completed: false, type:1 }
    ],
    pendingTodos: [
      { id: uuid.v4(), title: "lunch with Friend", completed: false, type:2 },
      { id: uuid.v4(), title: "hotel walk", completed: false, type:2 }
    ],
    progressTodos: [
      { id: uuid.v4(), title: "JD writing", completed: false, type:3 },
      { id: uuid.v4(), title: "conversion", completed: false, type:3 }
    ],
    completedTodos: [
      { id: uuid.v4(), title: "work done", completed: true, type:4 },
      { id: uuid.v4(), title: "conversation", completed: true, type:4 }
    ],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      res => console.log(res.data)
      // res => this.setState({ todos: res.data })
    );
  }

  markToggle = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };


  markProgress = (id, title)=> {
    
    //add todo ###################################################
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: true
    };
    this.setState({
      progressTodos: [...this.state.progressTodos, newTodo]
    });

    //delete todo ################################################ 
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
    this.setState({
      pendingTodos: [...this.state.pendingTodos.filter(pendingTodos => pendingTodos.id !== id)]
    });
    this.setState({
      completedTodos: [...this.state.completedTodos.filter(completedTodos => completedTodos.id !== id)]
    });
  };

  markDone = (id, title)=> {
    
    //add todo ###################################################
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: true
    };
    this.setState({
      completedTodos: [...this.state.completedTodos, newTodo]
    });

    //delete todo ################################################ 
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
    this.setState({
      pendingTodos: [...this.state.pendingTodos.filter(pendingTodos => pendingTodos.id !== id)]
    });
    this.setState({
      progressTodos: [...this.state.progressTodos.filter(progressTodos => progressTodos.id !== id)]
    });
  };

  deleteTodo = id => {
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      });
      this.setState({
        pendingTodos: [...this.state.pendingTodos.filter(pendingTodos => pendingTodos.id !== id)]
      });
      this.setState({
        progressTodos: [...this.state.progressTodos.filter(progressTodos => progressTodos.id !== id)]
      });
      this.setState({
        completedTodos: [...this.state.completedTodos.filter(completedTodos => completedTodos.id !== id)]
      });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <HeaderCol len={{masterlist:this.state.todos,todo:this.state.progressTodos,pending:this.state.pendingTodos,completed:this.state.completedTodos}} />
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-sm-3" id="sortable2">
                      <Todos
                        todos={this.state.todos}
                        markDone={this.markDone}
                        markProgress={this.markProgress}
                        markToggle={this.markToggle}
                        deleteTodo={this.deleteTodo}
                      />
                      <AddTodo addTodo={this.addTodo} />
                    </div>
                    <div className="col-sm-3 hideCk" id="sortable">
                      <TodoProgress
                        todos={this.state.progressTodos}
                        markDone={this.markDone}
                        markToggle={this.markToggle}
                        deleteTodo={this.deleteTodo}
                      />
                    </div>
                    <div className="col-sm-3 hideCk" id="sortable3">
                      <Todos
                        todos={this.state.pendingTodos}
                        markDone={this.markDone}
                        markProgress={this.markProgress}
                        markToggle={this.markToggle}
                        deleteTodo={this.deleteTodo}
                      />
                    </div>
                    <div className="col-sm-3 hideCk" id="sortable4">
                      <Todos
                        todos={this.state.completedTodos}
                        markDone={this.markDone}
                        markProgress={this.markProgress}
                        markToggle={this.markToggle}
                        deleteTodo={this.deleteTodo}
                      />
                    </div>
                  </div>
                </React.Fragment>
              )}
            />
            <Route
              path="/about"
              render={props => (
                <React.Fragment>
                  <About />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
