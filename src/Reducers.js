import { combineReducers } from "redux";

const toDos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      const toDos = state.filter(toDo => toDo.id !== action.payload);
      return toDos;

    case "UPDATE_STATUS":
      return state.map(toDo => toDo.id === action.payload ? { ...toDo, status: !toDo.status } : toDo);

    default:
      return state;
  }
}

export default combineReducers({
  toDos
});
