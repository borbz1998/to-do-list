import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';

class ToDoGroup extends Component {
    render() {
        const toDos = this.props.toDos.map((toDo) => (
            <ToDoItemContainer key={toDo.id} toDo={toDo} />
        ));
        return (
            <div className="scrollbar">
                {toDos}
            </div>
        );
    }
}

export default ToDoGroup;