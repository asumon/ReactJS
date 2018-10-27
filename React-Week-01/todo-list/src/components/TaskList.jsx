import React, { Component } from 'react';
import Task from './Task.jsx';

class TaskList extends Component {
  render() {
    return (
      <div>
<Task period={new Date().toDateString()}  activity_title="Get out of bed" activity_description="Wakeup & Do Exercise" />

<Task period={new Date("October 25, 2018").toDateString()} activity_title="Brush teeth" activity_description="Wash Your Mouth"  />

<Task period={new Date("October 26, 2018").toDateString()} activity_title="Eat breakfast" activity_description="Do Breakfast on right time"  />          
      </div>


    );
  }
}

export default TaskList;


