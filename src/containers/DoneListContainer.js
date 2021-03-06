import { connect } from 'react-redux';
import DoneList from '../components/DoneList';

const mapStateToProps = state => ({
    doneItems: state.toDos.filter(toDo => toDo.done)
});

const DoneListContainer = connect(mapStateToProps)(DoneList);

export default DoneListContainer;