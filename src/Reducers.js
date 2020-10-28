import { render } from "@testing-library/react";
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

    case "INIT_TODO":
      return action.payload;

    case "UPDATE_TODO":
      const toDo = state.filter(toDo => toDo.id !== action.payload);
      // return toDo;
      return {
        ...state, items : state.items.map( item => 
          item._id === action.payload.id
            ? action.payload
            : item)
      }

    default:
      return state;
  }
}

export default combineReducers({
  toDos
});
