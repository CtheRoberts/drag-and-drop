import React, { Component } from 'react';

import Category from "./Category";
import image from '../../static/assets/images/mountain.jpg';

export default class DragDrop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: [
                {name: "Learn Angular",
                category: "toDo",
                bgcolor: "yellow"},

                {name: "Learn SlimerJS",
                category: "currentProjects",
                bgcolor: "pink"},

                {name: "Learn React",
                category: "completed",
                bgcolor: "blue"},        
            ]
        }
    }

    onDragStart = (ev, name) => {
        console.log('dragstart:', name);
        ev.dataTransfer.setData("name", name);
    }

// Copied to Category.js
    onDragOver = (ev) => {
        ev.preventDefault();
    }

// Copied to Category.js
    onDrop = (ev, cat) => {
        let name = ev.dataTransfer.getData("name");

        let tasks = this.state.tasks.filter((task) => {
            if (task.name == name) {
                task.category = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }

    render() {
        let tasks = {
            toDo: [],
            currentProjects: [],
            completed: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(<div
                key={t.name}
                onDragStart={ (e) => this.onDragStart(e, t.name)}
                draggable
                className="draggable"
                style={{backgroundColor: t.bgcolor}}>
                    {t.name}
                </div>);
        });

        return (
            <div className="container-drag" style={{ backgroundImage: "url(" + image + ")" }}>

                {/* <div className="droppable toDo" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => {this.onDrop(e, "toDo")}}>
                    <span className="task-header">
                        <h3>To Do</h3>
                    </span>
                    {tasks.toDo}
                </div>

                <div className="droppable currentProjects" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => {this.onDrop(e, "currentProjects")}}>
                    <span className="task-header">
                        <h3>Current Projects</h3>
                    </span>
                    {tasks.currentProjects}
                </div>

                <div className="droppable completed" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "completed")}>
                    <span className="task-header">
                        <h3>Completed</h3>
                    </span>
                    {tasks.completed}
                </div>  */}

                <Category 
                    catName="drawingBoard" 
                    catTitle="Drawing Board"
                 />

                <Category 
                    catName="toDo" 
                    catTitle="To Do"
                />

                <Category 
                    catName="currentProjects" 
                    catTitle="Current Projects"
                />

                <Category 
                    catName="completed" 
                    catTitle="Completed"
                /> 

            </div>
        );
    }
}