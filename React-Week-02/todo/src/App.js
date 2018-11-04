import React from 'react';
import './bootstrap.min.css';
import Date from './Date.jsx';
let todos=require('./data.json');

class App extends React.Component {
  
  state = {
    todos: todos,
    createTodoText: '',
    isUpdate: false,
    updateTodoText: '',
    updateTodo: {}

  }
  _createTodoText = (e) => {
    this.setState({
     createTodoText: e.target.value 
    })
  }
  _createTodo = () => {
    let todo = {
      id: Date.now(),
      description: this.state.createTodoText,
      done: false
    }
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
      createTodoText: ''
    });
  }
  _showTodoText = todo => {
    if (todo.done) {
      return <span onClick={() => this._toggleTodo(todo)} className="lt">{todo.description}>Undo</span>
    }
    return <span onClick={() => this._toggleTodo(todo)}>{todo.description}</span>
  }
  _toggleTodo = td => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === td.id ) {
        return {
          id: todo.id,
          description: todo.description,
          done: ! todo.done
        }
      }else {
        return todo
      }
    });
    this.setState({
      todos
    })
  }

  _deleteTodo = (td) => {
    var todos = this.state.todos.filter(todo => todo.id !== td.id);
    this.setState({todos});
  }
  _createBlock = () => {
    return <div className="card mt-3">
      <div className="card-header">
        <h2>Create a todo</h2>
      </div>
      <div className="card-body">
        <input
          type="text"
          className="form-control"
          value={this.state.createTodoText}
          onChange={this._createTodoText}
          />
          <button
            onClick={this._createTodo}
            className="btn btn-success mt-2">Add a todo</button>
      </div>
    </div>
  }

  
  render () {
    return <div>
      <Date/>
      {this._createBlock()}
    <div className="card mt-5">
      <div className="card-header">
        <h2>List of Todos</h2>
      </div>
      <div className="card-body">
        {
          this.state.todos.map(todo => {
            return <li key={todo.id}>
           {this._showTodoText(todo)}
          <input type="checkbox" onClick={()=>this._toggleTodo(todo)}/>
          <button onClick={() => this._deleteTodo(todo)} className="btn btn-danger m-2">X</button>
</li>

          })
        }
      </div>
    </div>
    </div>
  }
}

export default App;