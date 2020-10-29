import { combineReducers } from "redux";

const toDos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter(toDo => toDo.id !== action.payload);

    case "UPDATE_STATUS":
      return state.map(toDo => toDo.id === action.payload ? { ...toDo, done: !toDo.done } : toDo);

    case "INIT_TODO":
      return action.payload;
      
    default:
      return state;
  }
}

export default combineReducers({
  toDos
});
