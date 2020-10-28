import React, { Component } from 'react';
import ToDoGeneratorContainer from '../containers/ToDoGeneratorContainer';
import ToDoGroupContainer from '../containers/ToDoContainer';


class ToDoList extends Component {
    render() {
        return (
            <div id="todoList" >
                <ToDoGroupContainer  />
                <ToDoGeneratorContainer />
            </div>
        );
    }
}

export default ToDoList;