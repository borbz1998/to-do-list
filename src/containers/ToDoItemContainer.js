import { connect } from 'react-redux';
import { deleteToDoItem, updateItemStatus } from '../Actions';
import ToDoItem from '../components/ToDoItem';

const mapDispatchToProps = dispatch => ({
    deleteToDoItem: (id) => { dispatch(deleteToDoItem(id)) },
    updateItemStatus: (id) => { dispatch(updateItemStatus(id)) }
});

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;