import React, { Component } from "react";

export default class Category extends Component {
    constructor(props) {
        super(props);

        //Changed from original
        this.state = {
            catName: "",
            catTitle: "",
            taskCall: "",
            tasks: [
                {name: "Sample",
                category: "",
                bgcolor: ""},        
            ]
        }

    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

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

// Changed from OG
    renderTasks = (t) => {
        tasks[t.category].push(<div
            key={t.name}
            onDragStart={ (e) => this.onDragStart(e, t.name)}
            draggable
            className="draggable"
            style={{backgroundColor: t.bgcolor}}>
                {t.name}
            </div>);
    }

    render() {
        let tasks = {
            toDo: [],
            currentProjects: [],
            completed: []
        }


        return (
            <div className={"droppable " + this.props.catName} onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => {this.onDrop(e, this.props.catName)}}>
                <span className="task-header">
                    <h3>{this.props.catTitle}</h3>
                </span>
                {/* {this.props.tasks} */}
                {/* {renderTasks()} */}
            </div>
        )
    }
}