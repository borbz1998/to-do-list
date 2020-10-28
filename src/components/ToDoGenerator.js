import React, { Component } from 'react';
import { addTodo } from '../apis/todos';
import "../css/ToDoGenerator.css";
import { Input } from 'antd';

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
                        <Input placeholder="input todo here..."  type="text" 
                        name="toDoInput" id="toDoInput" allowClear />
                        <input type="submit" value="ADD" id="toDoSubmit" />
                    </section>
                </form>
            </div>
        );
    }
}

export default ToDoGenerator;