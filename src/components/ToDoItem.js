import React, { Component } from 'react';
import "../css/ToDoItem.css";
import { deleteTodo,updateTodo } from '../apis/todos';

class ToDoItem extends Component {

    onUpdateItem = (event) => {
        updateTodo(this.props.toDo.id).then(response => {
            
            const enteredName = prompt('Please enter your name')
            this.setState({
                text:{ enteredName }
            });
        })
        
    }

    render() {
        const todoIsDone = this.props.toDo.status;

        const style = {
            textDecoration: todoIsDone ? 'line-through' : '',
            color: todoIsDone ? 'gray' : 'white'
        }
        return (
            <div>
                <div id="todoItem">
                    <span style={style} onClick={() => this.props.updateItemStatus(this.props.toDo.id)}>{this.props.toDo.text}</span>
                    <span onClick={() => deleteTodo(this.props.toDo.id)}><span id="deleteMark"> X </span></span>
                    <span onClick={this.onUpdateItem}><span id="deleteMark"> Y </span></span>
                

                </div>
            </div>
        );
    }
}

export default ToDoItem;