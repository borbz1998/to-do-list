import { connect } from 'react-redux';
import { addToDoItem } from '../Actions';
import ToDoGenerator from '../components/ToDoGenerator';

const mapDispatchToProps = dispatch => ({
    addToDoItem: (toDo) => { dispatch(addToDoItem(toDo)) }
});

const mapStateToProps = state => ({
    toDos: state.toDos
})

const ToDoGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoGenerator);

export default ToDoGeneratorContainer;