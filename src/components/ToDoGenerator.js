import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../apis/todos';
import "../css/ToDoGenerator.css";

class ToDoGenerator extends Component {

    onAddToDoItem = (event) => {
        event.preventDefault();
        const text = event.target.toDoInput.value
        addTodo(text).then(response => {
            this.props.addToDoItem(response.data);
            event.target.toDoInput.value = "";
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onAddToDoItem}>
                    <section>
                        <input type="text" name="toDoInput" id="toDoInput" />
                        <input type="submit" value="ADD" id="toDoSubmit" />
                    </section>
                </form>
            </div>
        );
    }
}

export default ToDoGenerator;