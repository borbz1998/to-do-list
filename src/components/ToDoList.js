import React, { Component } from 'react';
import ToDoGeneratorContainer from '../containers/ToDoGeneratorContainer';
import ToDoGroupContainer from '../containers/ToDoContainer';

class ToDoList extends Component {
    render() {
        return (
            <div>
                <h2>To-Do-List</h2>
                <ToDoGroupContainer />
                <ToDoGeneratorContainer />
            </div>
        );
    }
}

export default ToDoList;