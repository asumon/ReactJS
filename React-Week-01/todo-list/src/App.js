import React, { Component } from 'react';
import TaskList from './components/TaskList.jsx';
import Date from './components/Date.jsx';


class App extends Component {
    render() {
      return (
        <div>
             <Date />
          <br />
            <TaskList />
        </div>
  
      );
    }
  }
  
export default App;
