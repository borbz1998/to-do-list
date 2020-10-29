import React, { Component } from 'react';
import { deleteTodo,updateTodo } from '../apis/todos';
import { CloseCircleOutlined } from '@ant-design/icons';

class ToDoItem extends Component {

    onToggleToDo = () => {
        updateTodo(this.props.toDo).then(response => {
            this.props.updateItemStatus(response.data.id);
        })
    }

    onDeleteToDo = () => {
        deleteTodo(this.props.toDo.id).then(response => {
            this.props.deleteToDoItem(response.data.id);
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
                    <span style={style} onClick={this.onToggleToDo}>{this.props.toDo.text}</span>
                    <span onClick={this.onDeleteToDo}><span id="deleteMark"><CloseCircleOutlined /></span></span>
                </div>
            </div>
        );
    }
}

export default ToDoItem;