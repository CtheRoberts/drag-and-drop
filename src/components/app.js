import React, { Component } from 'react';
import DragDrop from './DragDrop'

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <div className="page-header">

          <div className="main-header">
            <h1>Kanban Board</h1>
          </div>

          <div className="sub-header">
            <h2>Drag-and-Drop Example</h2>
          </div>
          
        </div>

        <DragDrop />

      </div>
    );
  }
}


// How would I improve this code?
// 1. Make a new task generator on the page
// 2. Make a component that I can duplicate to create more categories