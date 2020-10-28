import React, { Component } from 'react';
import DoneListContainer from '../containers/DoneListContainer';

class DoneList extends Component {
    render() {
        console.log(this.props.toDoItems);
        // const doneList = this.props.doneItems.map((toDo) => 
        //     <li key={toDo.id}> {toDo.text}</li>);

        const doneList = this.props.doneItems.map((toDo) => 
        <li DoneListContainer key={toDo.id}>{toDo.text}</li>
        );
        return (
            <div>
                <ul>
                    {doneList}
                </ul>
            </div>
        );
    }
}

export default DoneList;